import React from "react";
import Menu from "./Menu";
import Rodape from "./Rodape";
import {Link} from "react-router-dom";

const Adm = () => {

    require('./Adm.css')

    return (  

        <div className="Adm">

            <Menu/>

            <br/>
            <br/>
            <br/>
            <br/>

            <h1> Seja-bem vindo, veja suas atualizações: </h1>

            <div className="fundoAdm" >

                <div className="boxAdm" >

                    <h1> Análise de Cadastros </h1>

                    <br/>
                    <br/>

                    <Link to='/AdmCadastro' className="button4" > Analisar </Link>

                </div>

                <div className="boxAdm" >

                    <h1> Análise de Empréstimos </h1>

                    <br/>
                    <br/>

                    <Link to='/AdmEmprestimos' className="button4" > Analisar </Link>

                </div>

            </div>

            <Rodape/>

        </div>

    );
}
 
export default Adm;