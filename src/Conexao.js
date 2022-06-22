import React from 'react';

const Conexao = () =>{

    const axios = require('axios').default;

    axios.get('http:localhost:3001/')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
        
    });

    return(
        <div>

            <h1> Cadastro de usuário </h1>
            <p> Ultimo usuário cadastrado: <strong> ? </strong> </p>

            <form>
                <input placeholder="Digite o nome..."/>
                <input placeholder="Digite o e-mail..."/>
                <button> Salvar </button>
            </form>


        </div>
    );
}

export default Conexao;