import Menu from "./Menu";
import Rodape from './Rodape';
import {Link} from "react-router-dom";

function Login() {

    require("./Login.css")

    return (
        <div className="fundo2">

            <Menu/>
            
            <div className="box2">
                <h1> Login </h1>
                <input placeholder="Digite seu CPF"></input>
                <br/>
                <br/>
                <input placeholder="Digite seu e-mail"></input>
                <br/>
                <br/>
                <input placeholder="Digite sua senha"></input>
                <br/>
                <br/>
                <Link to='/Simulacao' className="button2"> ENTRAR </Link>
            </div>
            
            <Rodape/>

        </div>
    );
}

export default Login;