import axios from "axios";
import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import "./SisGerenciamento.css";

const SisGerenciamento = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const safra = ref.current;
      safra.tpcultura.value = onEdit.tpcultura;
      safra.dtplantio.value = onEdit.dtplantio;
      safra.dtcolheita.value = onEdit.dtcolheita;
      safra.qtdfornecida.value = onEdit.qtdfornecida;
      safra.dtfornecida.value = onEdit.dtfornecida;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const safra = ref.current;

    if (
      !safra.tpcultura.value ||
      !safra.dtplantio.value ||
      !safra.dtcolheita.value ||
      !safra.qtdfornecida.value ||
      !safra.dtfornecida.value
    ) {
      return toast.warn("Todos campos devem ser preenchidos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/" + onEdit.id, {
          tipocultura: safra.tpcultura.value,
          dtplantio: safra.dtplantio.value,
          dtcolheita: safra.dtcolheita.value,
          qtdfornecida: safra.qtdfornecida.value,
          dtfornecida: safra.dtfornecida.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800", {
          tipocultura: safra.tpcultura.value,
          dtplantio: safra.dtplantio.value,
          dtcolheita: safra.dtcolheita.value,
          qtdfornecida: safra.qtdfornecida.value,
          dtfornecida: safra.dtfornecida.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    safra.tpcultura.value = "";
    safra.dtplantio.value = "";
    safra.dtcolheita.value = "";
    safra.qtdfornecida.value = "";
    safra.dtfornecida.value = "";

    setOnEdit(null);
    getUsers();
  };

  return (
    <form className="form-container" ref={ref} onSubmit={handleSubmit}>
      <div className="input-area">
        <label className="label">Tipo Cultura</label>
        <input className="input" name="tpcultura" />
      </div>

      <div className="input-area">
        <label className="label">Data Plantio</label>
        <input className="input" name="dtplantio" type="date" />
      </div>

      <div className="input-area">
        <label className="label">Data Colheita</label>
        <input className="input" name="dtcolheita" type="date"/>
      </div>

      <div className="input-area">
        <label className="label">Qtd. Fornecida</label>
        <input className="input" name="qtdfornecida" type="number"/>
      </div>

      <div className="input-area">
        <label className="label">Data Fornecida</label>
        <input className="input" name="dtfornecida" type="date" />
      </div>

      <button id="btn-safra" type="submit">SALVAR</button>
    </form>
  );
};

export default SisGerenciamento;