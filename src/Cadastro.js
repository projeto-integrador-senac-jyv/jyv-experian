import Menu from "./Menu";
import Rodape from './Rodape';
import {Link} from "react-router-dom";

function Cadastro() {

    require("./Cadastro.css")

    return (
        <div id='cadastro' className="cadastro">

            <Menu/>
            
            <div className="box animate__animated animate__fadeIn ">

                <h1 > Cadastro </h1>

                <input placeholder="Digite seu nome completo" id="NOME" required></input>
                <br/>
                <br/>
                <input placeholder="Digite sua data de nascimento" id="NASCIMENTO" required></input>
                <br/>
                <br/>
                <input placeholder="Digite seu CPF ou CNPJ" id="CPF/CNPJ" required></input>
                <br/>
                <br/>
                <input required type="email" placeholder="Digite seu e-mail" id="EMAIL" required></input>
                <br/>
                <br/>
                <input type='password' placeholder="Digite uma senha" id="SENHA" required></input> 
                <br/>
                <br/>
                <input type="password" placeholder="Confirme sua senha" required></input>
                <br/>
                <br/>
                <Link to='/AnaliseSimulacao' className="button1"> ENVIAR </Link>
                
            </div>
            
            <Rodape/>

        </div>
    );
}

export default Cadastro;

