import React, { useState } from 'react';
import * as Yup from 'yup';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Duvidas.css';

const ValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail inválido')
    .required('O campo e-mail é obrigatório.'),
  question: Yup.string().required('Você precisa preencher o campo com a sua dúvida.'),
});

export default function Duvidas() {
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    ValidationSchema.validate({ email, question }, { abortEarly: false })
      .then(() => {
        // Aqui você pode enviar os dados para o backend ou fazer qualquer outra ação necessária
        console.log({ email, question });
        setIsSubmitted(true);
      })
      .catch((validationErrors) => {
        const errors = {};

        validationErrors.inner.forEach((error) => {
          errors[error.path] = error.message;
        });

        setErrors(errors);
      });
  };

  return (
    <>
    <Header/>
    <div className='container-duvidas'>

        <div className='formulario-duvidas'>{isSubmitted ? (<p>Obrigado! Sua pergunta foi enviada.<br></br>Retornaremos através do e-mail cadastro em sistema.</p>
        ) : (
            <form onSubmit={handleSubmit}>
                <h2>Envie sua dúvida para nós!</h2>
            <div className='duvida-email'>
                <label htmlFor="email">E-mail:</label>
                <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                onBlur={handleSubmit}
                />
                {errors.email && <span>{errors.email}</span>}
            </div>
            <div className='duvida-text'>
                <label htmlFor="question">Sua dúvida:</label>
                <textarea
                id="question"
                name="question"
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                onBlur={handleSubmit}
                />
                {errors.question && <span>{errors.question}</span>}
            </div>
            <button type="submit" id="btn-duvidas">Enviar</button>
            </form>
        )}

        </div>
    </div>
    
    <Footer/>
    </>
  );
};