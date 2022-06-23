import Menu from "./Menu";
import Rodape from './Rodape';
import {Link} from "react-router-dom";

function Cadastro() {

    require("./Cadastro.css")

    return (
        <div id='cadastro' className="cadastro">

            <Menu/>
            
            <div className="box animate__animated animate__fadeIn ">

                <form>
                    <h1 > Cadastro </h1>
                    <input required  placeholder="Digite seu nome completo"></input>
                    <br/>
                    <br/>
                    <input required  placeholder="Digite sua data de nascimento"></input>
                    <br/>
                    <br/>
                    <input required  placeholder="Digite seu CPF ou CNPJ"></input>
                    <br/>
                    <br/>
                    <input required type="email" placeholder="Digite seu e-mail"></input>
                    <br/>
                    <br/>
                    <input required minlength="8"  type="password" placeholder="Digite uma senha"></input>
                    <br/>
                    <br/>
                    <input required minlength="8"  type="password" placeholder="Confirme sua senha"></input>
                    <br/>
                    <br/>
                    <button className="button1"> ENVIAR </button>
                </form>
            </div>
            
            <Rodape/>

        </div>
    );
}

export default Cadastro;