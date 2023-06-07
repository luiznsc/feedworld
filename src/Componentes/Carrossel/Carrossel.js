import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carrossel.css';
import { Link } from 'react-router-dom';

export default function Carrossel() {
  return (
    <div className='container-carousel'>
      <Carousel>
        <Carousel.Item>
          <Link to="/secao1" target="_blank">
            <img
              className="d-block w-100"
              src="./img/fome.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Combate à fome mundial e à escassez de alimentos</h3>
              <p>Como as tecnologias e IAs generativas podem ajudar a superar estes desafios.</p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/secao2" target="_blank">
            <img
              className="d-block w-100"
              src="./img/distribuicao.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Importância da distribuição de alimentos</h3>
              <p>Como as tecnologias e IAs generativas podem ajudar a superar estes desafios.</p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/secao3" target="_blank">
            <img
              className="d-block w-100"
              src="./img/maquinario.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Tecnologias inovadoras na agricultura</h3>
              <p>
                Entenda mais sobre: agricultura vertical, aquaponia e hidroponia.
              </p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
