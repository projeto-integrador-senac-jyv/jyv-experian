import React from 'react'
import Menu from "./Menu";
import Rodape from './Rodape';
import {Link , useNavigate} from "react-router-dom";

function Simulacao() {

    // nascimento = nascimento.split("T")[0];

    

    const navigate = useNavigate()
    const enviasimulacao = (e) => {
        e.preventDefault()
        const cpf_cnpj = document.getElementById ("cpf_cnpj").value;
        const parcelamento = document.getElementById("parcelamento").value;
        const nascimento = document.getElementById("nascimento").value;
        const valor = document.getElementById("valor").value;
        const email = document.getElementById("email").value;
        const banco = document.getElementById("banco").value;

        const obj = {
            cpf_cnpj: cpf_cnpj, 
            parcelamento: parcelamento,
            nascimento: nascimento,
            valor: valor,
            email: email,
            banco: banco
        }

        const axios = require('axios').default;
        
        axios.post('http://localhost:3001/emprestimos', obj)
        .then(function (response) {

            console.log(response)

            if(response.status == 200){
            
                navigate("/AnaliseSimulacao")
            }else{
                alert("Você Preencheu algo errado, tente novamente.")
            }

        })
        .catch(function (error) {
            console.error(error);
        })
    

    } 

    require("./Simulacao.css");


  return (
    <div id="simulacao" className="fundo">

        <Menu/> 

        <div className="fundo3" >
        
         
            <div className='titulo' >

                <h2 className='h2simulacao'> SIMULE SEU EMPRÉSTIMO PESSOAL </h2>
                <img src='https://i.imgur.com/lOf8lLY.png' ></img>
                
            </div>
    
            <div className="box3 animate__animated animate__fadeIn">
        <form onSubmit = {(e) => enviasimulacao(e)} >   
                <div>
                    

                        <input required id="cpf_cnpj"  minlength="11" placeholder="Informe  seu CPF ou CNPJ"></input>
                        <br/>
                        <br/>
                        <input required id="email" type="email" placeholder="Informe seu e-mail"></input>
                        <br/>
                        <br/>
                        <input required id="valor" step="0.01" type="number" placeholder="Informe o valor desejado para empréstimo"></input>
                        <br/>
                        <br/>
                        <input required id="nascimento" type="date" min="1900-01-01" max="2004-07-01" placeholder="Informe sua data de nascimento"></input>
                        <br/>
                        <br/>
                    
                   
                </div>

                    
                <div >
              
                    <label for="Banco"></label>

                    <select name="Banco" id="banco">

                        <option value="Escolha um Banco" >Escolha um Banco</option>
                        <option value="Banrisul">Banco Banrisul </option>
                        <option value="Bradesco">Banco do Bradesco</option>
                        <option value="Banco do Brasil">Banco do Brasil</option>
                        <option value="Caixa">Banco Caixa</option>
                        <option value="Inter">Banco Inter</option>
                        <option value="Itaú">Banco do Itaú</option>
                        <option value="Next"> Banco Next </option>
                        <option value="Pan"> Banco Pan </option>
                        <option value="Santander">Banco Santander</option>
                        <option value="SIM"> Banco SIM </option>
                        <option value="Nubank"> Nubank </option>
                        <option value="PicPay"> PicPay </option>

                        
                    </select>

                    <br/>
                    <br/>

                    <label for="Parcelamento"></label>

                    <select name="Parcelamento" id="parcelamento">
                        <option value="Escolha uma forma de Parcelamento">Escolha uma forma de Parcelamento</option>
                        <option value="5X Sem juros">5X Sem juros</option>
                        <option value="10X Sem juros">10X Sem juros</option>
                        <option value="15X Sem juros">15X Com juros</option>
                        <option value="20X Sem juros">20X Com juros</option>

                    </select>
                    <button className="button3"> Solicitar Análise </button>
                    
                
                </div>

                <br/>
                <br/>
                
         </form>
            </div>

        </div>

        <Rodape/>

   </div>



  )
}

export default Simulacao;

