import React from 'react'
import Menu from "./Menu";
import Rodape from './Rodape';
import {Link} from "react-router-dom";

function Simulacao() {

    const enviasimulacao = () => {
        const cpf_cnpj = document.getElementById ("cpf_cnpj").value;
        const parcelamento = document.getElementById("parcelamento").value;
        const nascimento = document.getElementById("nascimento").value;
        const status = document.getElementById("status").value;
        const valor = document.getElementById("valor").value;
        const email = document.getElementById("email").value;
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
        <form onSubmit = {() => enviasimulacao()} >   
                <div>
                    

                        <input required id="cpf_cnpj"  minlength="11" placeholder="Informe  seu CPF ou CNPJ"></input>
                        <br/>
                        <br/>
                        <input required id="email" type="email" placeholder="Informe seu e-mail"></input>
                        <br/>
                        <br/>
                        <input required id="valor" type="number" placeholder="Informe o valor desejado para empréstimo"></input>
                        <br/>
                        <br/>
                        <input required id="nascimento" type="date" placeholder="Informe sua data de nascimento"></input>
                        <br/>
                        <br/>
                    
                   
                </div>

                    
                <div >
              
                    <label for="Banco"></label>

                    <select name="Banco" id=" Banco ">

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

export default Simulacao