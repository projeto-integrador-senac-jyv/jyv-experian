import Menu from "./Menu";
import Rodape from './Rodape';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faIdCard, faLock } from "@fortawesome/free-solid-svg-icons";

function Login() {

    require("./Login.css")

    return (
        <div id='login' className="fundo2">

            <Menu/>
            
            <div className="box2 animate__animated animate__fadeIn" >

                <h1> Login </h1>

                <FontAwesomeIcon icon={faIdCard} />
                <br/>
                <input placeholder="Digite seu CPF ou CNPJ"></input>

                <br/>
                <br/>

                {/* <FontAwesomeIcon icon={faAt} />
                <br/>
                <input placeholder="Digite seu e-mail"></input>

                <br/>
                <br/> */}

                <FontAwesomeIcon icon={faLock} />
                <br/>
                <input  minlength="8"  type="password" placeholder="Digite sua senha" required></input>

                <br/>
                <br/>
                <br/>
                
                {/* <label for="Usuário"></label>

                <select name="Usuário" id="Usuário ">

                    <option value="Quem é você?" >Quem é você?</option>
                    <option value="Administrador">Administrador</option>
                    <option value="Cliente">Cliente</option>
        
                </select>

                <br/>
                <br/> */}

                <Link to='/Simulacao' className="button2"> ENTRAR </Link>

            </div>
            
            <Rodape/>

        </div>
    );
}

export default Login;