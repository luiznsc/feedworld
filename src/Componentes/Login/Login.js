import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Link } from "react-router-dom";
import * as yup from "yup";
import './Login.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const schema = yup.object({
  email: yup.string().email("Digite um email válido!").required("O campo e-mail é obrigatório!"),
  senha: yup.string().required("A senha é obrigatória!").min(8, "A senha deve ter pelo menos 8 caracteres!"),
});

export default function Login() {

  //variaveis para o form
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      senha: "",
    },
  });

  //variaveis para mostrar a senha
  const [showPassword, setShowPassword] = useState(false);

  //Função para mostrar a senha
  const mostraSenha = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };


  //Função para fazer o login
  function handleLogin(dadosUsuario) {
    schema
      .validate(dadosUsuario)
      .then(() => {
        console.log("Dados inseridos:", dadosUsuario);
  
        // BUSCAR USUÁRIO NA API
        fetch("http://localhost:8080/MyFarm1/rest/usuario", {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        })
          .then(function (response) {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error("Erro ao buscar usuários");
            }
          })
          .then(function (data) {
            const usuarioEncontrado = data.find(
              (usuario) =>
                usuario.email === dadosUsuario.email &&
                usuario.senha === dadosUsuario.senha
            );
            if (usuarioEncontrado) {
              console.log("Usuário autenticado com sucesso!");
              
              const nomeUsuario = usuarioEncontrado.nome;
              localStorage.setItem("nomeUsuario", nomeUsuario);

              alert("Login realizado com sucesso!");
              window.location.href = "/homeuser";

            } else {
              console.log("Dados de login inválidos");
              throw new Error("Dados de login inválidos");
            }
          })
          .catch(function (error) {
            console.log("Erro ao buscar usuários:", error);
            alert("Não foi possível fazer o login. Verifique seus dados e tente novamente.");
          });
      })
      .catch((error) => {
        console.log("Erro ao fazer login:", error);
        alert("Não foi possível fazer o login. Verifique seus dados e tente novamente.");
      });
  }
  

    return(
        <>
        <Header/>
        <div className="containerCriarconta"> 


            <div className="formulariologin">
            <form onSubmit={handleSubmit(handleLogin)}>

                <div className='titulologin'>
                    <h2>Login</h2>
                </div>
                
                <label>E-Mail:<br/>
                    <input type="text"  {...register("email")} name = "email" autoComplete="email" />
                    <span>{errors.email?.message}</span>
                    <br/>
                </label>


                <label>Senha:<br/>
                <div className="input-with-icon-login">
                    <input type={showPassword ? "text" : "password"}  {...register("senha")} name = "senha" autoComplete="current-password"/>
                    <div className="mostra-password-login" onClick={mostraSenha}>
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </div>
                      <span>{errors.senha?.message}</span>
                    <br/>
                  </div>
                </label>

                <div className='checkbox'>
                    <input type="checkbox" id="confirm"/>
                </div>

                <div className='labelcheckbox'>
                    <label for="confirm">Lembrar meu acesso</label>
                </div>

                <div className="button">
                  <button type="submit" className="botaocriar">ENTRAR</button>
                </div>
                <Link to="/cadastro"><p>Não tenho uma conta.</p></Link>
              </form>
            </div>
        </div>
        <Footer/>
        </>
    )
}