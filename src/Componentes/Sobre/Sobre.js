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
                <h2>A escassez de alimentos é um fator que contribui para a fome, sendo que muitas regiãos sofrem
                    com a falta de acesso a alimentos básicos, como arroz, trigo e milho.<br></br>
                    Esse problema é agravado por questões como mudanças climáticas, conflitos armados,
                    desigualdade social e economicas, e desastres naturais.
                </h2>
            </div>

            <div className="linhaesquerda"></div>

            <div className="qs2">
                <h2>Por isso, é fundamental que haja um esforço global no combate à fome e na garantia de acesso
                    a alimentos para todas as pessoas.<br></br> Medidas como a promoção da agricultura sustentável,
                    o investimento em sistemas de armazenamento e distribuição de alimentos, a eliminação do desperdício alimentar
                    e a redução das desigualdades sociais e econômicas são essenciais para enfrentar esse desafio.</h2>
            </div>

            <div className="linhadireita"></div>

            <div className="qs3">
                <h2>O combate à fome e à escassez de alimentos não é apenas uma questão humanitária,
                    mas também uma questão de justiça social e desenvolvimento econômico.
                    É necessário que governos, organizações internacionais, setor privado e sociedade civil atuem juntos
                    para garantir que todas as pessoas tenham acesso a alimentos nutritivos e suficientes para viver com dignidade.</h2>
            </div>     

            <div className="linhaesquerda"></div>  

            <div className="proposito2">
                <p>A tecnologia e inovação pode ajudar a melhorar a distribuição de alimentos,
                    desde a colheita até a entrega aos consumidores finais.
                </p>
            </div>

            <div className="proposito2">
                <p>Aqui você encontrará informações referente a influência da tecnologia no combate a fome mundial.</p>
            </div> 

            <Footer/>
        </>
    )
}
