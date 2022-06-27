import React from 'react';
import Cadastro from './Cadastro';
import Login from './Login';
import Inicio from './Inicio';
import Simulacao from './Simulacao';
import AnaliseCadastro from './AnaliseCadastro';
import AnaliseSimulacao from './AnaliseSimulacao';
import ComoFunciona from './Comofunciona';
import AdmCadastro from './AdmCadastro';
import AdmEmprestimos from './AdmEmprestimos';
import FaleConosco from './FaleConosco';
import MiniMenu from './MiniMenu';
import MeuPerfil from './MeuPerfil';
import Parcerias from './Parcerias';
import MeusEmprestimos from './MeusEmprestimos';
import Sair from './Sair';
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
                <Route path="/AnaliseCadastro" element={<AnaliseCadastro/>}/>
                <Route path='/AnaliseSimulacao' element= {<AnaliseSimulacao/>}/>
                <Route path="/ComoFunciona" element={<ComoFunciona/>}/>
                <Route path="/AdmCadastro" element={<AdmCadastro/>}/>
                <Route path="/AdmEmprestimos" element={<AdmEmprestimos/>}/>
                <Route path="/FaleConosco" element={<FaleConosco/>}/>
                <Route path="/MiniMenu" element={<MiniMenu/>}/>
                <Route path="/MeuPerfil" element={<MeuPerfil/>}/>
                <Route path="/Parcerias" element={<Parcerias/>}/>
                <Route path="/MeusEmprestimos" element={<MeusEmprestimos/>}/>
                <Route path="/Sair" element={<Sair/>}/>
                
            </Routes>
        </div>
    );

}
export default App;