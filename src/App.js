import React from 'react';
import Cadastro from './Cadastro';
import Login from './Login';
import Inicio from './Inicio';
import Simulacao from './Simulacao';
import { Routes, Route } from "react-router-dom";

function App () {

    require ("./App.css")

    return(

        <div>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/simulacao"element={<Simulacao/>}/>
            </Routes>
        </div>
    );

}
export default App;

/// Cor amarela: #daa520;
/// Cor roxa: #933999;