import React from "react";
import Menu from "./Menu";
import Rodape from "./Rodape";

const AdmCadastro = () => {

    require('./AdmCadastro.css')

    return (  

        <div className="AdmSol" >

            <Menu/>

            <div>

                <br/>
                <br/>
                <h1> Novas Solicitações: </h1>
                <br/>
                <br/>

            </div>

            <div className="Caixa2" >

                <h4> Nome completo: </h4>
                <h4> Data de nascimento: </h4>
                <h4> CPF: </h4>
                <h4> E-Mail: </h4>

            </div>
            
            <Rodape/>

        </div>

    );
}
 
export default AdmCadastro;