import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import Cadastro from "../Cadastro/Cadastro";
import Usuario from "../Cadastro-Usuario/Usuario";
import UseAuth from "../Hooks/UseAuth";

const Private = ({item}) =>{
    const {logado} = UseAuth();
    return logado > 0 ? <item /> : <Login/>;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
    <Fragment>
        <Routes>
            <Route exact path="/Usuario" element={<Private item={Usuario} />}/>
            <Route path="/" element={<Login />}/>
            <Route  path="/Cadastro" element={<Cadastro />} />
        </Routes>
    </Fragment>
    </BrowserRouter>
  );
}

export default RoutesApp;