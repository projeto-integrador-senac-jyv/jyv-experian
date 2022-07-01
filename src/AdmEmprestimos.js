import React from "react";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";
import Rodape from "./Rodape";

const AdmEmprestimos = () => {
    
    require('./AdmEmprestimos.css')

    const navigate = useNavigate()
    
    const [emprestimos, alteraemprestimos]=React.useState([])

    React.useEffect(()=>{

        // const senha = '1234'

        // const senha_digitada = window.prompt('Área restrita a usuários, digite a senha: ')

        //     if (senha != senha_digitada){
        //         alert('Você não tem permissão para acessar essa área!')
        //         navigate('/')
        //         // teste
        //     }

    }, [])
    
    const busca_emprestimos = ()=> {

        axios.get('http://localhost:3001/emprestimos')
        .then(function (response) {
            const dados = response.data
            alteraemprestimos(dados)
            console.log(dados)
        })
        .catch(function (error) {
        
            console.error(error);
        })

    }

    const muda_status =(id_emprestimos,status) => {

        axios.put(`http://localhost:3001/emprestimos/${id_emprestimos}/${status}`)
        .then(function (response) {
            busca_emprestimos()
            console.log(response)
        })
        .catch(function (error) {
        
            console.error(error);
        })

    }

    const axios = require('axios').default;
    



    React.useEffect(()=>{

        busca_emprestimos()

    },[])


    //  },[])

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

                        <div className="Carrossel" >

                            <div className="Colunas">

                                <h4> Forma de parcelamento: {e.parcelamento} </h4>
                                <h4> Data de nascimento: {nascimento} </h4>
                                <h4> CPF ou CNPJ: {e.cpf_cnpj} </h4>
                                <h4> E-Mail: {e.email} </h4>
                                <h4> Valor: {e.valor} </h4>
                                <h4> Banco: {e.banco} </h4>

                                <h4> Data do envio: {pedido_data + " às " + hora} </h4>

                                {/* {e.status==0? <p className="recusado"> Status: Recusado </p>} */}

                                {/* {
                                    if (status == 0){
                                        <p className="recusado"> Status: Recusado </p>
                                    }
                                } */}

                                {e.status==0? <p className="recusado"> Status: Recusado </p>:e.status==1? <p className="aprovado"> Status: Aprovado </p>:<p className="aguardando"> Status: Aguardando</p>}

                                <div className="ButtonAdmEmprestimos">

                                    <button className="AprovarAdmEmprestimos"  onClick={()=> muda_status(e.id_emprestimos,1)}> Aprovar </button>
                                    <button className="RecusarAdmEmprestimos" onClick={()=> muda_status(e.id_emprestimos,0)} > Recusar </button>

                                </div>

                            </div>

                            <div className="Colunas">

                                {/* <h4> Forma de parcelamento: {e.parcelamento} </h4>
                                <h4> Data de nascimento: {nascimento} </h4>
                                <h4> CPF ou CNPJ: {e.cpf_cnpj} </h4>
                                <h4> E-Mail: {e.email} </h4>
                                <h4> Valor: {e.valor} </h4>
                                <h4> Banco: {e.banco} </h4>

                                <h4> Data do envio: {pedido_data + " às " + hora} </h4>

                                {/* {e.status==1? <p className="aprovado"> Status: Aprovado </p>} */}

                                {/* {
                                    if (status == 1){
                                        <p className="aprovado"> Status: Aprovado </p>
                                    }
                                } */}


                                {/* <div className="ButtonAdmEmprestimos">

                                    <button className="AprovarAdmEmprestimos"  onClick={()=> muda_status(e.id_emprestimos,1)}> Aprovar </button>
                                    <button className="RecusarAdmEmprestimos" onClick={()=> muda_status(e.id_emprestimos,0)} > Recusar </button>

                                </div>  */}

                            </div>

                            <div className="Colunas">

                                {/* <h4> Forma de parcelamento: {e.parcelamento} </h4>
                                <h4> Data de nascimento: {nascimento} </h4>
                                <h4> CPF ou CNPJ: {e.cpf_cnpj} </h4>
                                <h4> E-Mail: {e.email} </h4>
                                <h4> Valor: {e.valor} </h4>
                                <h4> Banco: {e.banco} </h4>

                                <h4> Data do envio: {pedido_data + " às " + hora} </h4>

                                {/* {<p className="aguardando"> Status: Aguardando</p>} */}

                                {/* {
                                    if (status == 1){
                                        <p className="aprovado"> Status: Aprovado </p>
                                    }
                                } */}


                                {/* <div className="ButtonAdmEmprestimos">

                                    <button className="AprovarAdmEmprestimos"  onClick={()=> muda_status(e.id_emprestimos,1)}> Aprovar </button>
                                    <button className="RecusarAdmEmprestimos" onClick={()=> muda_status(e.id_emprestimos,0)} > Recusar </button>

                                </div>  */}

                            </div>


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

// {e.status==0? <p className="recusado"> Status: Recusado </p>:e.status==1? <p className="aprovado"> Status: Aprovado </p>:<p className="aguardando"> Status: Aguardando</p>}