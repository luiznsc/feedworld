import React from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import "./TableSafras.css"


const TableSafras = ({ users, setUsers, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/" + id)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.id !== id);

        setUsers(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };

  return (
    <table className="table"> {/* Adicione a classe CSS 'table' */}
    <thead>
      <tr>
        <th>Tipo Cultura</th>
        <th>Data Plantio</th>
        <th>Data Colheita</th>
        <th>Qtd. Fornecida</th>
        <th>Data Fornecida</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {users.map((item, i) => (
        <tr key={i}>
          <td width="30%">{item.nome}</td>
          <td width="30%">{item.email}</td>
          <td width="20%" className="onlyWeb">
            {item.fone}
          </td>
          <td align="center" width="5%">
            <FaEdit onClick={() => handleEdit(item)} />
          </td>
          <td align="center" width="5%">
            <FaTrash onClick={() => handleDelete(item.id)} />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  );
};

export default TableSafras;