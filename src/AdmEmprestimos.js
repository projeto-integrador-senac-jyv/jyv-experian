import React from "react";
import Menu from "./Menu";
import Rodape from "./Rodape";

const AdmEmprestimos = () => {

    require('./AdmEmprestimos.css')

    return (  

        <div className="AdmEmSol" >

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
 
export default AdmEmprestimos;