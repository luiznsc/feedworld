import React, { useState, useEffect, useRef } from 'react';
import './ContadorSobre.css';

const ContadorSobre = ({ numero }) => {
  const [contador, setContador] = useState(0);
  const contadorRef = useRef(null);


  //contador
  useEffect(() => {
    const observadorIntersecao = new IntersectionObserver((entradas) => {
      if (entradas[0].isIntersecting) {
        const incremento = Math.ceil(numero / 100);
        const tempoTotal = 5000;
        const intervalo = tempoTotal / incremento;

        let valorAtual = 0;
        const timer = setInterval(() => {
          valorAtual += incremento;

          if (valorAtual >= numero) {
            clearInterval(timer);
            valorAtual = numero;
          }

          setContador(formatarNumero(valorAtual));
        }, intervalo);

        observadorIntersecao.unobserve(contadorRef.current);
      }
    });

    observadorIntersecao.observe(contadorRef.current);

    return () => observadorIntersecao.disconnect();
  }, [numero]);

  //formatar numero contador
  const formatarNumero = (valor) => {
    return valor.toLocaleString('pt-BR', {
      useGrouping: true,
      minimumFractionDigits: 0,
    });
  };

  return (
    <div className="contador" ref={contadorRef}>
      {contador}
    </div>
  );
};

export default ContadorSobre;
