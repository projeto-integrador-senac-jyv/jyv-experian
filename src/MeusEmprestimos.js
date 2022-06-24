import Menu from "./Menu";
import Rodape from './Rodape';
import React from "react";
import {Link} from "react-router-dom";

const MeusEmprestimos = () => {

    require("./MeusEmprestimos.css")

    return (  

        <div id="Emprestimos" className="MeusEmprestimos_fundo">

            <Menu/>

            <h1> Meus empréstimos: </h1>

            <div className="MeusEmprestimos_display">

                <div className="MeusEmprestimos_img">

                    <img src='https://i.imgur.com/j9RHBPj.png'/>

                </div>

                <div className="MeusEmprestimos_container">

                    <h3> Banco: </h3>
                    <h3> Valor: </h3>
                    <h3> Forma de pagamento: </h3>
                    <h3> Data de vencimento: </h3>

                </div>
              

            </div>

            <Rodape/>

        </div>

    );
}
 
export default MeusEmprestimos;