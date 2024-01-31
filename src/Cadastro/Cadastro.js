
import React, { useState } from "react";
import Input from '../Components/Input';
import Button from '../Components/Button';
import * as C from './styles';
import { Link, useNavigate } from "react-router-dom";
import UseAuth from '../Hooks/UseAuth';

const Cadastro = () => {
  const [email, setEmail] = useState("");
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
      <C.Label>Cadastrar Usuário</C.Label>
      <C.Content>
      <Input
          type="username"
          placeholder="nome@email.com"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
       
        <Input
          type="email"
          placeholder="nome@email.com"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
          <Input
          type="phone"
          placeholder="+55 11 99999 9999"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Cadastrar Usuário" onClick={handleSignup} />
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Cadastro;
