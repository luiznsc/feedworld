import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import "./TableSafras.css";
import EditTableSafras from "../EditTableSafras/EditTableSafras";

export default function TableSafras  () {
  const [safras, setSafras] = useState([]);
  const [editItem, setEditItem] = useState(null);

  const handleEdit = (item) => {
    setEditItem(item); // Define o item selecionado no estado
  };


  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/MyFarm1/rest/colheita/${id}`);
      const newArray = safras.filter((user) => user.id !== id);
      setSafras(newArray);
      toast.success("Safra excluída com sucesso.");
      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } catch (error) {
      toast.error("Erro ao excluir safra.");
    }
  };

  const fetchSafras = async () => {
    try {
      const response = await axios.get("http://localhost:8080/MyFarm1/rest/colheita");
      const safrasData = response.data.map((item) => ({
        idcolheita: item.id_Colheita,
        tipocultura: item.tipo_Cultura,
        dtplantio: item.dataPlantio,
        dtcolheita: item.dataColheita,
        qtdcolhida: item.qtdColhida,
        dtfornecida: item.dataFornecida
      }));
      setSafras(safrasData);
    } catch (error) {
      toast.error("Erro ao carregar os dados da safra");
    }
  };

  useEffect(() => {
    fetchSafras();
  }, []);

  if (editItem) {
    return <EditTableSafras item={editItem} onUpdate={setSafras} />;
  }

  if (safras.length === 0) {
    return <div>Não há registros de safra cadastrados.</div>;
  }

  return (
    <table className="table-safra">
      <thead>
        <tr>
          <th>Cód. Safra</th>
          <th>Tipo Cultura</th>
          <th>Data Plantio</th>
          <th>Data Colheita</th>
          <th>Qtd. Colhida</th>
          <th>Data Fornecida</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {safras.map((item) => (
          <tr key={item.idcolheita}>
            <td data-label="Cód. Safra">{item.idcolheita}</td>
            <td data-label="Tipo Cultura">{item.tipocultura}</td>
            <td data-label="Data Plantio">{item.dtplantio}</td>
            <td data-label="Data Colheita">{item.dtcolheita}</td>
            <td data-label="Qtd. Colheita">{item.qtdcolhida}</td>
            <td data-label="Data Fornecida">{item.dtfornecida}</td>
            
            <td id="edit">
              <FaEdit onClick={() => handleEdit(item)} />
            </td>
            <td id="delete">
              <FaTrash onClick={() => handleDelete(item.idcolheita)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};