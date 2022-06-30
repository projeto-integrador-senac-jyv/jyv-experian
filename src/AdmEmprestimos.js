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

        <div className="AdmEmSol">

            <Menu/>

            <div>
              
                <h1> Novas Solicitações: </h1>
                
            </div>

            {emprestimos==0? <p>  Carregando... </p>:
          
            
            <>
                {emprestimos.map(e => {


                    //formatar data de nascimento
                    let nascimento = e.nascimento
                    nascimento = nascimento.split("T")
                    nascimento = nascimento[0]
                    nascimento = nascimento.split("-")
                    nascimento.reverse();
                    nascimento = nascimento.join("/")

                    let pedido_data = e.data_pedido
                    pedido_data = pedido_data.split("T")
                    pedido_data = pedido_data[0]
                    pedido_data = pedido_data.split("-")
                    pedido_data.reverse();
                    pedido_data = pedido_data.join("/")
                
                    // //formatar horario
                    let hora = e.data_pedido
                    hora = hora.split("T")[1]
                    hora = hora.split(".")[0]
                    hora = hora.split(":")[0] + ":" + hora.split(":")[1]
                

                    
                    return(
                        <div className="Caixa2" >
                            
                            <h4> Forma de parcelamento: {e.parcelamento} </h4>
                            <h4> Data de nascimento: {nascimento} </h4>
                            <h4> CPF ou CNPJ: {e.cpf_cnpj} </h4>
                            <h4> E-Mail: {e.email} </h4>
                            <h4> Valor: {e.valor} </h4>
                            <h4> Banco: {e.banco} </h4>
                            

                            {e.status==0? <p className="recusado">  Recusado </p>:e.status==1? <p className="aprovado">  Aceito </p>:<p className="aguardando"> Aguardando...</p>}

                            <h4> Data do envio: {pedido_data + " às " + hora} </h4>

                        </div>
                    )

                })}

                <Rodape/>

            </>      
}
        </div>

    );
}
 
export default AdmEmprestimos;