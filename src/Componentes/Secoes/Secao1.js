import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Secao.css';


export default function Secao1() {


    return (
        <>
            <Header/>
            <div className='container-carousel'>
                <Carousel controls={false}>
                    <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="./img/fome.jpg"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>Combate à fome mundial e à escassez de alimentos</h3>
                            <p>Como as tecnologias e IAs generativas podem ajudar a superar estes desafios.</p>
                            </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            
            <div className="container-secao">
                <h2>Combate à Fome Mundial e Escassez de Alimentos</h2>
                <p>
                    A fome mundial e a escassez de alimentos são problemas urgentes que afetam milhões de pessoas em todo o mundo.
                    Neste componente, apresentaremos informações relevantes sobre essas questões e a importância de combatê-las.
                </p>
                <h3>1. Causas da Fome Mundial</h3>
                <p>
                    Exploraremos as principais causas da fome, como pobreza extrema, desigualdade, conflitos armados, mudanças climáticas
                    e falta de acesso a recursos e infraestrutura adequados.
                </p>
                <h3>2. Impactos da Fome</h3>
                <p>
                    Destacaremos os impactos devastadores da fome na saúde, educação, desenvolvimento econômico e bem-estar das pessoas,
                    além de ressaltar as consequências negativas para as comunidades e o progresso global.
                </p>
                <h3>3. Iniciativas e Soluções</h3>
                <p>
                    Apresentaremos iniciativas e soluções eficazes no combate à fome mundial, como programas de segurança alimentar,
                    agricultura sustentável, educação nutricional, investimentos em infraestrutura e apoio a comunidades vulneráveis.
                </p>
                <p>A fome e a escassez de alimentos são desafios globais que afetam milhões de pessoas em todo o mundo.</p>
                <p>Felizmente, as tecnologias e as IAs generativas estão desempenhando um papel fundamental na busca de soluções para esses problemas.</p>
                <p>Através da aplicação de técnicas avançadas de inteligência artificial, é possível otimizar a produção agrícola, prever crises alimentares e encontrar formas inovadoras de garantir a segurança alimentar global.</p>
                <h3>4. O Papel de Cada Um</h3>
                <p>
                    Destacaremos como cada indivíduo pode contribuir para combater a fome e a escassez de alimentos, seja por meio de
                    doações, voluntariado, conscientização, advocacia política ou apoio a organizações e projetos que atuam nessa área.
                    <p>Essas tecnologias permitem identificar padrões e tendências, melhorar a eficiência dos sistemas de cultivo e distribuição de alimentos e criar novas alternativas para suprir a demanda crescente por alimentos em todo o mundo.</p>
                <p>Além disso, as IAs generativas podem ser utilizadas para desenvolver soluções personalizadas e adaptáveis às necessidades específicas de cada região, levando em consideração fatores como clima, recursos naturais e cultura local.</p>
             
                </p>
                <h3>5. Conclusão</h3>
                <p>
                    Faremos uma conclusão enfatizando a importância de unir esforços e trabalhar em conjunto para eliminar a fome mundial
                    e garantir a segurança alimentar para todos.
                    <p>Com o uso inteligente e responsável dessas tecnologias, podemos avançar significativamente no combate à fome e à escassez de alimentos, proporcionando um futuro mais sustentável e equitativo para todos.</p>
                </p>
                
                <br></br>

                <div class="card">
                    <img src="..." class="card-img-top" alt=""></img>
                    <div class="card-body">
                        <h5 class="card-title">Estudantes da USP revolucionam:</h5>
                        <p class="card-text">Pesquisadores usam inteligência artificial no combate à fome.</p>
                        <Link to="https://news.ifood.com.br/pesquisadores-usam-inteligencia-artificial-no-combate-a-fome/" target="_blank" class="btn-primary">VEJA TAMBÉM</Link>
                    </div>
                </div>

            </div>
            <Footer/>
        </>
    )
}


