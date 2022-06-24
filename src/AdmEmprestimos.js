import React from "react";
import Menu from "./Menu";
import Rodape from "./Rodape";

const AdmEmprestimos = () => {

    require('./AdmEmprestimos.css')

    const axios = require('axios').default;
    
    const [emprestimos, alteraemprestimos]=React.useState([])
    React.useEffect(()=>{

        axios.get('http://localhost:3001/emprestimos')
  .then(function (response) {
    const dados = response.data
    alteraemprestimos(dados)
    console.log(dados)
  })
  .catch(function (error) {
    
    console.error(error);
  })

       },[])

    return (  

        <div className="AdmEmSol" >

            <Menu/>

            <div>
              
                <h1> Novas Solicitações: </h1>
                
            </div>

            {
                emprestimos==0? <p>  Carregando... </p>:
                emprestimos.map(e => 

            <div className="Caixa" >

                <h4> CPF ou CNPJ: {e.cpf}</h4>
                <h4> E-Mail:{e.email} </h4>
                <h4> Valor:{e.valor} </h4>
                <h4> Banco: </h4>
                <h4> Forma de parcelamento: </h4>

                {e.status==0? <p>  Recusado </p>:e.status==1?<p>  Aceito </p>: <p> Aguardando...</p>}

                <h4> Data do envio:{e.data_pedido} </h4>

            </div>

             ) 
            }

            <Rodape/>

        </div>

    );
}
 
export default AdmEmprestimos;