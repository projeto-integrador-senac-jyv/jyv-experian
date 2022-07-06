import React from "react";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";
import Rodape from "./Rodape";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCaretLeft, faCaretRight, faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";

const AdmEmprestimos = () => {
    
    require('./AdmEmprestimos.css')

    const navigate = useNavigate()
    
    const [emprestimos, alteraemprestimos]=React.useState([])
    const [ indice, alteraIndice ] = React.useState(0);

    const mostrando = emprestimos[indice];

    React.useEffect(()=>{

        const senha = 'inovação'

        const senha_digitada = window.prompt('Área restrita a usuários, digite a senha: ')

            if (senha != senha_digitada){
                alert('Você não tem permissão para acessar essa área!')
                navigate('/')
                // teste
            }

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
    
    const formataData = ( data ) => {
        //formatar data de nascimento
        let nascimento = data
        nascimento = nascimento.split("T")
        nascimento = nascimento[0]
        nascimento = nascimento.split("-")
        nascimento.reverse();
        nascimento = nascimento.join("/")
        return nascimento;
    }

    const formataHora = ( hora ) => {
        // //formatar horario
        hora = hora.split("T")[1]
        hora = hora.split(".")[0]
        hora = hora.split(":")[0] + ":" + hora.split(":")[1]
        return hora;
    }


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

            {
                emprestimos==0? <p>  Carregando... </p>:
          
            
            <div className="Carrossel">

                <div onClick={()=>{ indice <= 0 ? alteraIndice(emprestimos.length-1) : alteraIndice(indice-1) }} >
                    <FontAwesomeIcon icon={faCaretLeft} className='seta'/>
                </div>

                {
                    mostrando == null ? <p> Aguardando... </p> :


                        <div className="Caixas" >

                            <div className="Colunas  ">

                                <h4> Forma de parcelamento: </h4>
                                <h2>{mostrando.parcelamento}</h2>
                                <br/>

                                <h4> Data de nascimento: </h4>
                                <h2>{ formataData(mostrando.nascimento)}</h2>
                                <br/>

                                <h4> CPF ou CNPJ: </h4>
                                <h2>{mostrando.cpf_cnpj}</h2>
                                <br/>

                                <h4> E-Mail: </h4>
                                <h2>{mostrando.email}</h2>                                    
                                <br/>

                                <h4> Valor: </h4>
                                <h2>{mostrando.valor}</h2>
                                <br/>

                                <h4> Banco: </h4>
                                <h2>{mostrando.banco}</h2>
                                <br/>

                                <h4> Data do envio: { formataData(mostrando.data_pedido)+" às "+formataHora(mostrando.data_pedido) } </h4>

                                <div>
                                    {mostrando.status==0? <p className="recusado"> Status: Recusado </p>:mostrando.status==1? <p className="aprovado"> Status: Aprovado </p>:<p className="aguardando"> Status: Aguardando</p>}
                                </div>

                                <div className="ButtonAdmEmprestimos">

                                    <button className="AprovarAdmEmprestimos"  onClick={()=> muda_status(mostrando.id_emprestimos,1)}> Aprovar </button>
                                    <button className="RecusarAdmEmprestimos" onClick={()=> muda_status(mostrando.id_emprestimos,0)} > Recusar </button>

                                </div>

                            </div>

                        </div>

                    

                }

                <div onClick={()=>{ indice >= emprestimos.length-1 ? alteraIndice(0) : alteraIndice(indice+1) }} >
                    <FontAwesomeIcon icon={faCaretRight} className='seta' />
                </div>

                </div>


            }

            
            <Rodape/>

        </div>

    );
}
 
export default AdmEmprestimos;
