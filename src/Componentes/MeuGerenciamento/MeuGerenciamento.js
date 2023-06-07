import "./MeuGerenciamento.css";
import SisGerenciamento from "../SisGerenciamento/SisGerenciamento";
import TableSafras from "../TableSafras/TableSafras";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


export default function MeuGerenciamento() {
  const [onEdit, setOnEdit] = useState(null);
  return (
    <>
    <Header/>
    
      <div className="container-titulo">
        <h2>GERENCIAMENTO DE SAFRAS</h2>
        <h5>Após registrar sua safra, poderá gerencia-la nessa aba e acompanha-la na tela inicial atráves do calendário.</h5>
        <p>- Ao editar uma safra registrada você deverá utilizar o mesmo 'Cód. Safra', caso contrário não será possível atualizar os dados da safra.</p>
        <p>- Após editar clique no check e atualize a página.</p>
      </div>

      <div className="container-gerenciamento">
        <SisGerenciamento onEdit={onEdit} setOnEdit={setOnEdit}/>
        <TableSafras/>
      </div>
      
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />

      <Footer/>
    </>
  );
}

