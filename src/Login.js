import Menu from "./Menu";
import Rodape from './Rodape';
import {Link} from "react-router-dom";

function Login() {

    require("./Login.css")

    return (
        <div className="fundo2">

            <Menu/>
            
            <div className="box2 animate__animated animate__fadeIn" >
                <h1> Login </h1>
                <input placeholder="Digite seu CPF ou CNPJ"></input>
                <br/>
                <br/>
                <input placeholder="Digite seu e-mail"></input>
                <br/>
                <br/>
                <input type="password" placeholder="Digite sua senha"></input>
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