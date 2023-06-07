import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import InputMask from "react-input-mask";
import * as yup from "yup";
import './Cadastro.css';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Link } from "react-router-dom";


const schema = yup.object({
  nome: yup.string().required("O campo nome é obrigatório!"),
  email: yup.string().email("Digite um email válido!").required("O campo e-mail é obrigatório!"),
  cpf: yup.string().min(14, "O campo CPF deve ter 11 dígitos!").required("O CPF é obrigatório!"),
  senha: yup.string().required("A senha é obrigatória!").min(8, "A senha deve ter pelo menos 8 caracteres!"),
  confirmaSenha: yup.string().oneOf([yup.ref("senha"), null], "As senhas não coincidem!").required("Confirme sua senha!"),
});

export default function Cadastro() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      nome: "",
      email: "",
      cpf: "",
      senha: "",
      confirmaSenha: "",
    },
  });

  const [showPlaceholder, setShowPlaceholder] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  //aparecer placeholder no input de email apenas ao clicar
  const handleFocus = () => {
    setShowPlaceholder(true);
  };
  const handleBlur = (event) => {
    if (event.target.value === "") {
      setShowPlaceholder(false);
    }
  };

  const mostraSenha = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  function handleCadastro(dadosUsuario) {
    //VALIDAR DADOS
    // schema.validate(dadosUsuario)
    console.log("Dados válidos - Cadastro realizado", dadosUsuario);
    alert("Cadastro realizado com sucesso!");
    window.location.href = "/login";

    //CADASTRAR NA API
    fetch("http://localhost:8080/MyFarm1/rest/usuario", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dadosUsuario),
    })
    //retorna os dados em JSON
      .then(function (response) {
        alert("Cadastro realizado com sucesso!");
      })
      .catch(function (error) {
        console.log(error)
      });
  }

  return (
    <div className="containerCadastro"> 

      <div className="formulario">

        <h1 className="tituloformulario">Criar conta</h1>

        <form onSubmit={handleSubmit(handleCadastro)} >

          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" {...register("nome")} />
          {errors.nome && <span>{errors.nome.message}</span>}
          <br></br>

          <label htmlFor="email">Email:</label>
          <input type="email" id="email"{...register("email")} placeholder={showPlaceholder ? "example@example.com" : ""} onFocus={handleFocus} onBlur={handleBlur}/>
          {errors.email && <span>{errors.email.message}</span>}
          <br></br>

          <label htmlFor="cpf">CPF:</label>
          <InputMask mask="999.999.999-99" maskChar ="" type="text" id="cpf" className="input-mask" {...register("cpf")} />
          {errors.cpf && <span>{errors.cpf.message}</span>}
          <br></br>

          <label htmlFor="senha">Senha:</label>
          <div className="input-with-icon">
            <input type={showPassword ? "text" : "password"} id="senha" {...register("senha")} />
              <div className="mostra-password" onClick={mostraSenha}>
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </div>
            {errors.senha && <span>{errors.senha.message}</span>}
          </div>
          <br></br>

          <label htmlFor="confirmaSenha">Confirmar Senha:</label>
          <div className="input-with-icon">
            <input type={showPassword ? "text" : "password"} id="confirmaSenha" {...register("confirmaSenha")} />
              <div className="mostra-password" onClick={mostraSenha}>
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </div>
            {errors.confirmaSenha && <span>{errors.confirmaSenha.message}</span>}
          </div>
          
          <div className="button">
            <button type="submit" className="botaocriar">Cadastrar</button>
          </div>

          <Link to="/login"><p>Já tenho uma conta!</p></Link>
          
        </form>
      </div>
    </div>
  );
}
