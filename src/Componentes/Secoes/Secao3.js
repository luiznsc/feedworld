import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Secao.css';

export default function Secao3() {


    return (
        <>
            <Header/>
            <div className='container-carousel'>
                <Carousel controls={false}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./img/maquinario.jpg"
                            alt="Third slide"/>
                            <Carousel.Caption>
                            <h3>Tecnologias inovadoras na agricultura</h3>
                            <p>
                                Entenda mais sobre: agricultura vertical, aquaponia e hidroponia.
                            </p>
                            </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>


  
            </div>

            <div className="container-secao">
            <h2>Tecnologias Inovadoras na Agricultura</h2>
                <p>
                    A agricultura é uma área que tem sido impulsionada por tecnologias inovadoras, buscando melhorar a eficiência, produtividade e sustentabilidade do setor. Dentre essas tecnologias, destacam-se a agricultura vertical, a aquaponia e a hidroponia.
                </p>
                <h3>1. Agricultura Vertical</h3>
                <p>
                    A agricultura vertical é um sistema que utiliza estruturas em camadas para cultivar plantas verticalmente, em ambientes internos controlados. Essa abordagem permite maximizar o uso do espaço, economizar recursos como água e energia, e cultivar alimentos o ano todo, independentemente das condições climáticas externas. Além disso, a agricultura vertical reduz a necessidade de pesticidas e herbicidas, promovendo uma produção mais sustentável e livre de agrotóxicos.
                </p>
                <h3>2. Aquaponia</h3>
                <p>
                    A aquaponia é uma técnica que combina a criação de peixes em tanques com o cultivo de plantas em água, utilizando os resíduos dos peixes como nutrientes para as plantas. Esse sistema simbiótico permite a recirculação dos recursos, eliminando a necessidade de fertilizantes químicos e reduzindo o consumo de água em comparação com a agricultura convencional. Além disso, a aquaponia promove a produção de alimentos saudáveis e de alta qualidade, com menor impacto ambiental.
                </p>
                <h3>3. Hidroponia</h3>
                <p>
                    A hidroponia é um método de cultivo em que as plantas são cultivadas sem solo, em um ambiente aquático com nutrientes balanceados. Nesse sistema, as plantas recebem os nutrientes diretamente na água, permitindo um controle preciso das condições de crescimento. A hidroponia oferece benefícios como o uso eficiente de recursos hídricos, maior produção em menor espaço físico e cultivo livre de pragas e doenças do solo. Essa tecnologia possibilita o cultivo de alimentos frescos em áreas urbanas e regiões com recursos limitados.
                </p>
                <h3>4. Potencial das Tecnologias na Agricultura</h3>
                <p>
                    As tecnologias inovadoras na agricultura têm o potencial de impulsionar a produção de alimentos de forma mais sustentável, contribuindo para a segurança alimentar global. Essas abordagens oferecem soluções para desafios como a escassez de terras agrícolas, a demanda crescente por alimentos e os impactos das mudanças climáticas. Além disso, a integração de sensores, análise de dados e automação permite um monitoramento mais preciso das plantas, otimização dos recursos e tomada de decisões baseadas em informações em tempo real.
                </p>
                <h3>5. Conclusão</h3>
                <p>
                    A agricultura está passando por uma revolução impulsionada por tecnologias inovadoras, como a agricultura vertical, a aquaponia e a hidroponia. Essas abordagens oferecem soluções promissoras para aumentar a produção de alimentos, reduzir o impacto ambiental e garantir a segurança alimentar. Com investimentos contínuos em pesquisa e desenvolvimento, essas tecnologias têm o potencial de transformar a forma como cultivamos alimentos, proporcionando um futuro mais sustentável e abundante.
                </p>

                <br></br>

                <div class="card">
                    <img src="..." class="card-img-top" alt=""></img>
                    <div class="card-body">
                        <h5 class="card-title">Entenda agricultura vertical:</h5>
                        <p class="card-text">Setor de agricultura vertical deve movimentar cerca de US$ 10 bilhões até 2025.</p>
                        <Link to="https://summitagro.estadao.com.br/tendencias-e-tecnologia/tecnologias-impulsionam-agricultura-vertical/" target="_blank" class="btn-primary">VEJA TAMBÉM</Link>
                    </div>
                </div>

                <div class="card">
                    <img src="..." class="card-img-top" alt=""></img>
                    <div class="card-body">
                        <h5 class="card-title">Aquaponia: como funciona a piscicultura que pode trazer benefícios à pecuária</h5>
                        <p class="card-text">Processo sustentável apresentado pelo Instituto de Zootecnia utiliza resíduos dos tanques de peixes para produzir grãos e forragens que vão alimentar o gado, economizando recursos e protegendo o meio ambiente. </p>
                        <Link to="https://g1.globo.com/sp/ribeirao-preto-franca/agrishow/2022/noticia/2022/04/29/aquaponia-como-funciona-a-piscicultura-que-pode-trazer-beneficios-a-pecuaria.ghtml" target="_blank" class="btn-primary">VEJA TAMBÉM</Link>
                    </div>
                </div>

                <div class="card">
                    <img src="..." class="card-img-top" alt=""></img>
                    <div class="card-body">
                        <h5 class="card-title">Hidroponia: o que é preciso saber para introduzir esse sistema?</h5>
                        <p class="card-text">Entenda o que é a hidroponia, quando ela vale a pena e o que é preciso considerar para montar um sistema. </p>
                        <Link to="https://summitagro.estadao.com.br/noticias-do-campo/hidroponia-o-que-e-preciso-saber-para-introduzir-esse-sistema/" target="_blank" class="btn-primary">VEJA TAMBÉM</Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}


