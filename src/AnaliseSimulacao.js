import React from "react";
import Menu from "./Menu";
import Rodape from "./Rodape";


const AnaliseSimulacao = () => {
    
    require('./AnaliseSimulacao.css')

    return ( 

        <div id='AnaliseSimulacao'>

            <Menu/>

            <div className="analise" >
                
                <h1 > Parabéns! Seu cadastro foi efetuado com sucesso. </h1>
                <img  width={500} src="https://i.imgur.com/Qz3uAWl.png"/>  
                <h1> Aguarde, pois suas informações estão em análise...  </h1>
                <h1> Entratemos em contato por e-mail para informar o resultado! </h1>
                          
            </div>

            <br/>
            <br/>
            <br/>
                              
            <Rodape/>
        </div>

     );
};
 
export default AnaliseSimulacao;