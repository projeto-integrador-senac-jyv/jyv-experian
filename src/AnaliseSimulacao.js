import React from "react";
import Menu from "./Menu";
import Rodape from "./Rodape";


const AnaliseSimulacao = () => {
    
    require('./AnaliseSimulacao.css')

    return ( 

        <div>

            <Menu/>

            <div className="analise" >
                
                <h1 > Parabéns! Seu cadastro foi efetuado com sucesso. </h1>
                <img  width={500} src="https://i.imgur.com/Qz3uAWl.png"/>  
                <h1> Aguarde, pois suas informações está em análise...  </h1>
                
                
            </div>

            <Rodape/>
        </div>

     );
};
 
export default AnaliseSimulacao;