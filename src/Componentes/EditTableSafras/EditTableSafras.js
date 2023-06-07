import React, { useRef } from "react";
import axios from "axios";
import "./EditTableSafras.css";
import { FaCheckCircle, FaWindowClose } from "react-icons/fa";
import { toast } from "react-toastify";
// import { id } from "date-fns/locale";

const EditTableSafras = ({ item, onUpdate }) => {

    const idColheitaRef = useRef();
    const tipoCulturaRef = useRef();
    const dataPlantioRef = useRef();
    const dataColheitaRef = useRef();
    const qtdColhidaRef = useRef();
    const dataFornecidaRef = useRef();

    const handleSave = () => {
      const idColheita = idColheitaRef.current.value;
      const tipoCultura = tipoCulturaRef.current.value;
      const dataPlantio = dataPlantioRef.current.value;
      const dataColheita = dataColheitaRef.current.value;
      const qtdColhida = qtdColhidaRef.current.value;
      const dataFornecida = dataFornecidaRef.current.value;

      const colheita = {
        id_Colheita: idColheita,
        tipo_Cultura: tipoCultura,
        dataPlantio: dataPlantio,
        dataColheita: dataColheita,
        qtdColhida: qtdColhida,
        dataFornecida: dataFornecida
      };


    axios.put(`http://localhost:8080/MyFarm1/rest/colheita/${idColheita}`, colheita)
      .then(response => {
        console.log('Dados atualizados com sucesso:', response.data);
        toast.success("Dados atualizados com sucesso.");
        onUpdate();
      })
      .catch(error => {
        console.error('Erro ao atualizar os dados:', error);
        toast.error("Erro ao atualizar os dados da safra");
      });
  };

  const handleCancel = () => {
    onUpdate();
  };

  return (
    <table className="table-edit">
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
        <tr>
          <td data-label="Cód. Safra">
            <input
              type="text"
              name="id_Colheita"
              ref={idColheitaRef}
              value={item.id_Colheita}
            />
          </td>

          <td data-label="Tipo Cultura">
            <input
              type="text"
              name="tipo_Cultura"
              ref={tipoCulturaRef}
              value={item.tipo_Cultura}
            />
          </td>

          <td data-label="Data Plantio">
            <input
              type="text"
              name="dataPlantio"
              ref={dataPlantioRef}
              value={item.dataPlantio}
              placeholder="DD/MM/AAAA"
              maxLength={10}
            />
          </td>

          <td data-label="Data Colheita">
            <input
              type="text"
              name="dataColheita"
              ref={dataColheitaRef}
              value={item.dataColheita}
              placeholder="DD/MM/AAAA"
              maxLength={10}
            />
          </td>

          <td data-label="Qtd. Colhida">
            <input
              type="text"
              name="qtdColhida"
              ref={qtdColhidaRef}
              value={item.qtdColhida}
            />
          </td>

          <td data-label="Data Fornecida">
            <input
              type="text"
              name="dataFornecida"
              ref={dataFornecidaRef}
              defaultValue={item.dataFornecida}
              placeholder="DD/MM/AAAA"
              maxLength={10}
            />
          </td>

          <td id="save">
            <FaCheckCircle onClick={handleSave}>Salvar</FaCheckCircle>
          </td>
          <td id="close">
            <FaWindowClose onClick={handleCancel}>Cancelar</FaWindowClose>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default EditTableSafras;
