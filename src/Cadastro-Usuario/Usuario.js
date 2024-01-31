import React, { useState } from "react";
import Input from '../Components/Input';
import Button from '../Components/Button';
import * as C from './styles';
import { Link, useNavigate } from "react-router-dom";
import UseAuth from '../Hooks/UseAuth';

const Usuario = () => {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [dataNasc, setDataNasc] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");

  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = UseAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };

  return (
    <C.Container>
      <C.Label>Cadastrar Pessoa Fisica</C.Label>
      <C.Content>
      <C.Label>Dados Pessoais</C.Label>
      <Input
          type="text"
          placeholder="nome"
          value={nome}
          onChange={(e) => [setNome(e.target.value), setError("")]}
        />
       
       <Input
          type="text"
          placeholder="sobrenome"
          value={sobrenome}
          onChange={(e) => [setSobrenome(e.target.value), setError("")]}
        />
         <Input
          type="dataNasc"
          placeholder="31/01/1900"
          value={dataNasc}
          onChange={(e) => [setDataNasc(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="email@email.com"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="cpf"
          placeholder="CPF"
          value={cpf}
          onChange={(e) => [setCpf(e.target.value), setError("")]}
        />
         <Input
          type="rg"
          placeholder="RG"
          value={rg}
          onChange={(e) => [setRg(e.target.value), setError("")]}
        />
       <C.Label>Endereços</C.Label>
        
        <C.labelError>{error}</C.labelError>
        <Button Text="Salvar" onClick={handleSignup} />
        <C.LabelSignin>
          
          <C.Strong>
            <Link to="/">&nbsp;Salvar</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Usuario;
