function Login() {

    require("./Login.css")

    return (
        <div className="fundo2">


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
                <button className="button2"> ENTRAR </button>
            </div>

        </div>
    );
}

export default Login;