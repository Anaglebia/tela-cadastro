import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import Cadastro from "../Cadastro/Cadastro";
import Usuario from "../Cadastro-Usuario/Usuario";

const RoutesApp = () => {
  return (
    <BrowserRouter>
    <Fragment>
        <Routes>
            {/* <Route exact path="/Usuario" element={<Private item={Usuario} />}/> */}
            <Route path="/" element={<Login />}/>
            <Route path="/Usuario" element={<Usuario />}/>
            <Route  path="/Cadastro" element={<Cadastro />} />
        </Routes>
    </Fragment>
    </BrowserRouter>
  );
}

export default RoutesApp;