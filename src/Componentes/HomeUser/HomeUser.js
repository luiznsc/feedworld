import React from "react";
import Header from "../Header/Header";

import Footer from "../Footer/Footer";
import SecaoDesafios from "../SecaoDesafios/SecaoDesafios";
import IndividualIntervalsExample from "../Carousel/Carousel";
import './HomeUser.css'

export default function HomeUser(){
    return(
        <>
            <Header/>
            <IndividualIntervalsExample/>
            <div className="container-inicial-user">
                <div className="container-1">
                    <h2>API DE NOTICIAS</h2>
                </div>

                <div className="container-2">
                    <h2>Veja como as IA's Generativas <br></br>podem atuar nos seguintes pontos:</h2>
                    <SecaoDesafios/>
                </div>

            </div>
            
            <Footer/>
        </>
    )
}
