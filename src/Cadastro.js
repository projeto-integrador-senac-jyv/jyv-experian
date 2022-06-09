import Menu from "./Menu";
import Rodape from './Rodape';
import {Link} from "react-router-dom";

function Cadastro() {

    require("./Cadastro.css")

    return (
        <div className="fundo">

            <Menu/>
            
            <div className="box">
                <h1> Cadastro </h1>
                <input placeholder="Digite seu nome completo"></input>
                <br/>
                <br/>
                <input placeholder="Digite sua data de nascimento"></input>
                <br/>
                <br/>
                <input placeholder="Digite seu CPF"></input>
                <br/>
                <br/>
                <input placeholder="Digite seu e-mail"></input>
                <br/>
                <br/>
                <input  type="password" placeholder="Digite uma senha"></input>
                <br/>
                <br/>
                <input  type="password" placeholder="Confirme sua senha"></input>
                <br/>
                <br/>
                <Link to='/AnaliseSimulacao' className="button1"> ENVIAR </Link>
            </div>
            <Rodape/>
        </div>
    );
}

export default Cadastro;

