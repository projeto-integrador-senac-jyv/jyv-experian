import React from "react";
import Menu from "./Menu";
import Rodape from "./Rodape";


const AnaliseCadastro = () => {
    
    require('./AnaliseCadastro.css')

    return ( 

        <div className="fundo4">

            <Menu/>

            <div >
                
                <h2> Parabéns! Seu cadastro foi efetuado com sucesso. </h2>
                <img src="https://i.imgur.com/Qz3uAWl.png">  </img>

                <h3> Aguarde, pois sua solicitação está em análise  </h3>
                
                
            </div>

            <Rodape/>
        </div>

     );
}
 
export default AnaliseCadastro;