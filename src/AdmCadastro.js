import React from "react";
import Menu from "./Menu";
import Rodape from "./Rodape";



const AdmCadastro = () => {

    require('./AdmCadastro.css')

        const axios = require('axios').default;
    
        const [usuarios, alterausuarios]=React.useState([])
        React.useEffect(()=>{
    
            axios.get('http://localhost:3001/')
      .then(function (response) {
        const dados = response.data
        alterausuarios(dados)
        console.log(dados)
      })
      .catch(function (error) {
        
        console.error(error);
      })
    
        },[])

    return (  

        <div className="AdmSol" >

            <Menu/>

            <div>

                <h1> Novas Solicitações: </h1>
                
            </div>

            <div className="Caixa2" >

                <h4> Nome completo: </h4>
                <h4> Data de nascimento: </h4>
                <h4> CPF: </h4>
                <h4> E-Mail: </h4>

            </div>
            
            <Rodape/>

        </div>

    );
}
 
export default AdmCadastro;