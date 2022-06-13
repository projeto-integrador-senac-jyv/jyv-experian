import React from "react";
import Menu from "./Menu";
import Rodape from "./Rodape";


const AnaliseSimulacao = () => {
    
    require('./AnaliseSimulacao.css')

    return ( 

        <div id='AnaliseSimulacao'>

            <Menu/>

            <div className="analise animate__animated animate__fadeIn" >
                
                <h1 > Parabéns! Seu cadastro foi efetuado com sucesso. </h1>
                <img  width={500} src="https://i.imgur.com/Qz3uAWl.png"/>  
                <h1> Aguarde, pois suas informações estão em análise...  </h1>
                
                
            </div>

            <Rodape/>
        </div>

     );
};
 
export default AnaliseSimulacao;