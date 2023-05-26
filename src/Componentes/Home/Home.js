import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import Sobre from '../Sobre/Sobre';
import { AiOutlineArrowDown } from 'react-icons/ai';


export default function Home(){

    const handleScroll = () => {
        window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth',
        });
      };

    return(
        <>
        <div className='containerHome'>
            <img id="logoinicial" src="./img/FeedWorld.png" alt="imagem logo"></img>
            <h1 id="h1-inicio">with technology</h1>

            <div className='botaocomece'>
                <Link to={"/homeuser"}><button className="btn btn-comece">Começar</button></Link>
            </div>
            <br/>

            <div className='scroll-indicador' onClick={handleScroll}>
                <AiOutlineArrowDown className='seta-icon' />
            </div>
        </div>

        <Sobre/>
        </>
    )
}