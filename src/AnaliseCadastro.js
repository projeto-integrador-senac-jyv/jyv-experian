import React from "react";
import Menu from "./Menu";
import Rodape from "./Rodape";


const AnaliseCadastro = () => {
    
    require('./AnaliseCadastro.css')

    return ( 

        <div id='AnaliseCadastro'>

            <Menu/>

            <div className="fundo" >
                
                <h1 > Parabéns! Sua simulação foi efetuada com sucesso. </h1>
                <img  width={500} src="https://i.imgur.com/Qz3uAWl.png"/>  
                <h1> Aguarde, pois sua solicitação está em análise...  </h1>
                <h1> Entraremos em contato por e-mail para mostrar o resultado </h1>
            </div>

            <Rodape/>

        </div>

     );
};
 
export default AnaliseCadastro;