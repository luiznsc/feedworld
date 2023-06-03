import React from "react";
import Footer from "../Footer/Footer";
import ContadorSobre from "../ContadorSobre/ContadorSobre";
import './Sobre.css'


export default function Sobre(){

    return(
        <>  
            <div className="proposito1">
                <ContadorSobre numero={828000000}/>
                <div className="text"><p>de pessoas afetadas pela fome.</p></div>
            </div>

            <div className="qs1">
                <h2>A escassez e disperdício de alimentos é um fator que contribui para a fome, sendo que muitas regiões sofrem
                    com a falta de acesso a alimentos básicos, como arroz, trigo e milho.<br></br>
                </h2>
            </div>

            <div className="linhaesquerda"></div>

            <div className="qs2">
                <h2>Por isso, é fundamental que você, agricultor, tenha acesso a tecnologias que possam ajudar a gerenciar a sua produção de alimentos.</h2>
            </div>

            <div className="linhadireita"></div>

            <div className="qs3">
                <h2>Tenha todo o controle das suas safras em um só sistema web!</h2>
            </div>     

            <div className="linhaesquerda"></div>  

            <div className="proposito2">
                <p>Além de auxiliar na gestão de sua produção, você terá artigos sempre atualizados sobre o universo AgroTech!
                </p>
            </div>

            <div className="proposito2">
                <p>Seja pró-vida, seja MyFarm!</p>
            </div> 

            <Footer/>
        </>
    )
}
