import "./MeuGerenciamento.css";
import styled from "styled-components";
import SisGerenciamento from "../SisGerenciamento/SisGerenciamento";
import TableSafras from "../TableSafras/TableSafras";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-left: auto;
  margin-right: auto;
  height: auto;
  min-height: 550px;
`;

const Title = styled.h2`
  color: #004840;
  weight: 700;
  text-align: center;
  `;

export default function MeuGerenciamento() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <>
    <Header/>
    
      <Container>
        <Title>GERENCIAMENTO DE SAFRAS</Title>
        <SisGerenciamento onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
        <TableSafras setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />

      <Footer/>
    </>
  );
}
