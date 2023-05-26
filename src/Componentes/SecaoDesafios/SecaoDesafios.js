import React from "react";
import './SecaoDesafios.css'
import { Link } from "react-router-dom";

export default function SecaoDesafios(){
    const itemlista1 = "Combate a fome e a escassez dos alimentos";
    const itemlista2 = "Tecnologias inovadoras na agricultura";
    const itemlista3 = "Importância da distribuição de alimentos";
    return(
        <>
            <div className="container-desafios">
                <ul className="desafios-lista">
                    <li><Link to={"/user"}>{itemlista1}</Link></li>
                    <li><Link to={"/"}>{itemlista2}</Link></li>
                    <li><Link to={"/"}>{itemlista3}</Link></li>
            </ul>
            </div>
        </>
    )
}
