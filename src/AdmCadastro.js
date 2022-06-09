import React from "react";
import Menu from "./Menu";
import Rodape from "./Rodape";

const AdmCadastro = () => {

    require('./AdmCadastro.css')

    return (  

        <div className="AdmSol" >

            <Menu/>

            <br/>
            <br/>
            <h1> Novas Solicitações: </h1>
            <br/>
            <br/>

            <Rodape/>

        </div>

    );
}
 
export default AdmCadastro;