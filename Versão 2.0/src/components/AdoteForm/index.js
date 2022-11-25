import React, { useState, useEffect } from "react";
import Input from "./Input";
import Button from "./Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const Form = () => {

  useEffect(() => {
    if(localStorage.getItem('users_bd')){
      navigate("/");
    }
  },[])

  const [nome, setnome] = useState("");
  const [endereco, setendereco] = useState("");
  const [telefone, settelefone] = useState("");
  const [q1, setq1] = useState("");
  const [q2, setq2] = useState("");
  const [q3, setq3] = useState("");
  const [q4, setq4] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const text = {
    color: 'black'
  }

  const handleSignup = () => {
    if (!nome | !endereco | !telefone | !q1 | !q2 | !q3 | !q4){
      setError("Preencha todos os campos");
      return;
    // } else if (nome !== emailConf) {
    //   setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(nome, endereco, telefone, q1, q2, q3, q4);

    if (res) {
      setError(res);
      return;
    }

    alert("Formulário enviado com sucesso!");
    navigate("/login");
  };

  return (
    <C.Container>
      <C.Label>Formulário de Adoção</C.Label>
      <C.Content>
        <h1 style={text}>Nome Completo</h1>
        <Input
          type="text"
          placeholder="Ex: Ana Clara"
          value={nome}
          onChange={(e) => [setnome(e.target.value), setError("")]}
        />
         <h1 style={text}>Endereço</h1>
        <Input
          type="text"
          placeholder="Ex: Av. Treze de Maio, 2081 - Benfica, Fortaleza - CE"
          value={endereco}
          onChange={(e) => [setendereco(e.target.value), setError("")]}
        />
        <h1 style={text}>Telefone</h1>
        <Input
          type="number"
          placeholder="Ex: (00) 0000-0000"
          value={telefone}
          onChange={(e) => [settelefone(e.target.value), setError("")]}
        />
        <h1 style={text}>É a primeira vez que você adota um Pet?</h1>
        <Input
          type="text"
          placeholder=""
          value={q1}
          onChange={(e) => [setq1(e.target.value), setError("")]}
        />
        <h1 style={text}>Você possui experiência com cuidado de animais?</h1>
        <Input
          type="text"
          placeholder=""
          value={q2}
          onChange={(e) => [setq2(e.target.value), setError("")]}
        />
        <h1 style={text}>Você mora sozinho(a)?</h1>
        <Input
          type="text"
          placeholder=""
          value={q3}
          onChange={(e) => [setq3(e.target.value), setError("")]}
        />
        <h1 style={text}>Está ciente sobre a responsabilidade ao realizar a adoção?</h1>
        <Input
          type="text"
          placeholder=""
          value={q4}
          onChange={(e) => [setq4(e.target.value), setError("")]}
        />
        
        <C.labelError>{error}</C.labelError>
        <Button Text="Enviar" onClick={handleSignup} />
        {/* <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/login">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin> */}
      </C.Content>
    </C.Container>
  );
};

export default Form;