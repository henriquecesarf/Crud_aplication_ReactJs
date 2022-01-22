import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./Home";
import Registro from "./Registro";
import Cadastro from "./Cadastro";

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Registro" element={<Registro />} />
                <Route path="Cadastro" element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers;