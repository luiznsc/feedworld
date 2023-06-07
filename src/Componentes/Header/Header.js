import './Header.css'
import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Header() {    
  const [showMenu, setShowMenu] = useState(false);
  const itemmenu1 = "Dúvidas?";
  const itemmenu2 = "Meu Gerenciamento";
  const itemmenu3 = "Desconectar";
  const nomeUsuario = localStorage.getItem("nomeUsuario");

  function handleMenuClick() {
    setShowMenu(!showMenu);
  }

  function Disconect(){
    const confirmDisconnect = window.confirm("Tem certeza de que deseja desconectar?");
    if (confirmDisconnect) {
      localStorage.clear();
      window.location.href = "/";
    }
  }

  function VerificaLogin() {

    if (!nomeUsuario) {
      alert("Você precisa estar logado para acessar essa página!");
      window.location.href = "/";
    }
  }

  function Logado() {
    if (nomeUsuario) {
      window.location.href = "/homeuser";
    }
  }
  


  return (
    <header>
      <Link to={"/"} ><img id="logo" src="./img/logo.png" alt="img logo" onClick={Logado}></img></Link>
      
      <div className="hamburger-menu" onClick={handleMenuClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`menu ${showMenu ? 'show' : ''}`}>
        <li><Link to={"/duvidas"} onClick={VerificaLogin}>{itemmenu1}</Link></li>
        <li><Link to={"/meugerenciamento"} onClick={VerificaLogin}>{itemmenu2}</Link></li>
        <li><Link to={"/"} onClick={Disconect}>{itemmenu3}</Link></li>
      </ul>
    </header>
  );
}