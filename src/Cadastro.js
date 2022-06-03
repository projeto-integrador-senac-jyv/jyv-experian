function Cadastro() {

    require("./Cadastro.css")

    return (
        <div className="fundo">


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
                <input placeholder="Digite uma senha"></input>
                <br/>
                <br/>
                <input placeholder="Confirme sua senha"></input>
                <br/>
                <br/>
                <button className="button1"> ENVIAR </button>
            </div>

        </div>
    );
}

export default Cadastro;

