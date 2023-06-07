import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Calendario from "../Calendario/Calendario";
import Carrossel from "../Carrossel/Carrossel";
import './HomeUser.css'

export default function HomeUser(){
    const nomeUsuario = localStorage.getItem("nomeUsuario");
    return(
        <>

            <Header/>
            <div className="inicial">
               <h1>Olá {nomeUsuario}!</h1>
            </div>

            <Calendario/>
            <Carrossel/>
            <Footer/>
        </>
    )
}
