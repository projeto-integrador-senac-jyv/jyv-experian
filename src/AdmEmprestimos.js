import React from "react";
import Menu from "./Menu";
import Rodape from "./Rodape";

const AdmEmprestimos = () => {

    require('./AdmEmprestimos.css')

    return (  

        <div className="AdmEmSol" >

            <Menu/>

            <div>
              
                <h1> Novas Solicitações: </h1>
                
            </div>

            <div className="Caixa" >

                <h4> CPF ou CNPJ: </h4>
                <h4> E-Mail: </h4>
                <h4> Valor: </h4>
                <h4> Banco: </h4>
                <h4> Forma de parcelamento: </h4>

            </div>

            <Rodape/>

        </div>

    );
}
 
export default AdmEmprestimos;