import axios from "axios";
import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import "./SisGerenciamento.css";
// import { id } from "date-fns/locale";


const SisGerenciamento = ({ onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const safra = ref.current;
      safra.idcolheita.value = onEdit.id_Colheita;
      safra.tpcultura.value = onEdit.tipo_Cultura;
      safra.dtplantio.value = onEdit.dataPlantio;
      safra.dtcolheita.value = onEdit.dataColheita;
      safra.qtdcolhida.value = onEdit.qtdColhida;
      safra.dtfornecida.value = onEdit.dataFornecida;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const safra = ref.current;
    if (
      !safra.idcolheita.value ||
      !safra.tpcultura.value ||
      !safra.dtplantio.value ||
      !safra.dtcolheita.value ||
      !safra.qtdcolhida.value ||
      !safra.dtfornecida.value
    ) {
      return toast.warn("Todos os campos devem ser preenchidos!");
    }

    const idColheita = safra.idcolheita.value;
    const existingSafra = await axios.get(
      `http://localhost:8080/MyFarm1/rest/colheita/${idColheita}`
    );

    if (existingSafra.data) {
      return toast.error(
        "Já existe uma safra registrada com esse ID de colheita!"
      );
    }

    await axios
      .post("http://localhost:8080/MyFarm1/rest/colheita", {
        id_Colheita: safra.idcolheita.value,
        tipo_Cultura: safra.tpcultura.value,
        dataPlantio: safra.dtplantio.value,
        dataColheita: safra.dtcolheita.value,
        qtdColhida: safra.qtdcolhida.value,
        dataFornecida: safra.dtfornecida.value,
      })
      .then(({ data }) => {
        console.log("Resposta da API:", data);
        toast.success("Safra cadastrada com sucesso!");
      })
      .catch(({ data }) => {
        console.log("ERRO AO CADASTRAR", Response);
        toast.error("Falha ao cadastrar a safra!");
      });

    safra.idcolheita.value = "";
    safra.tpcultura.value = "";
    safra.dtplantio.value = "";
    safra.dtcolheita.value = "";
    safra.qtdcolhida.value = "";
    safra.dtfornecida.value = "";

    setOnEdit(null);
  };

  return (
    <form className="form-container" ref={ref} onSubmit={handleSubmit}>
      <div className="input-area">
        <label className="label">Cód. Safra</label>
        <input className="input" type="number" name="idcolheita" />
      </div>

      <div className="input-area">
        <label className="label">Tipo Cultura</label>
        <input className="input" name="tpcultura" />
      </div>

      <div className="input-area">
        <label className="label">Data Plantio</label>
        <input className="input" type="text" name="dtplantio" placeholder="DD/MM/YYYY" maxLength={10}/>
      </div>

      <div className="input-area">
        <label className="label">Data Colheita</label>
        <input className="input" type="text" name="dtcolheita" placeholder="DD/MM/YYYY" maxLength={10}/>
      </div>

      <div className="input-area">
        <label className="label">Qtd. Colhida</label>
        <input className="input" name="qtdcolhida" type="number" />
      </div>

      <div className="input-area">
        <label className="label">Data Fornecida</label>
        <input className="input" type="text" name="dtfornecida" placeholder="DD/MM/YYYY" maxLength={10}/>
      </div>

      <button id="btn-safra" type="submit">
        SALVAR
      </button>
    </form>
  );
};

export default SisGerenciamento;
