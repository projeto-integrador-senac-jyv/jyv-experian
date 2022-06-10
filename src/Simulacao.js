import React from 'react'
import Menu from "./Menu";
import Rodape from './Rodape';
import {Link} from "react-router-dom";

function Simulacao() {



    require("./Simulacao.css");


  return (
    <div id="simulacao" className="fundo">

        <Menu/> 

        <div className="fundo3" >
        

            <div className='titulo' >

                <h2 className='h2simulacao'> SIMULE SEU EMPRÉSTIMO PESSOAL </h2>
                <img src='https://i.imgur.com/lOf8lLY.png' ></img>
                
            </div>
        
            <div className="box3">

                <div >
                    <input placeholder="Informe  seu CPF"></input>
                    <br/>
                    <br/>
                    <input placeholder="Informe seu e-mail"></input>
                    <br/>
                    <br/>
                    <input placeholder="Informe o valor desejado para empréstimo"></input>
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
                        <option value="Santander">Banco Santander</option>
                        <option value="Votorantim">Banco Votorantim </option>
                        <option value="Nubank"> Nubank </option>
                        <option value="PicPay"> PicPay </option>

                        
                    </select>

                    <br/>
                    <br/>

                    <label for="Parcelamento"></label>

                    <select name="Parcelamento" id=" Parcelamento ">
                        <option value="Escolha uma forma de Parcelamento">Escolha uma forma de Parcelamento</option>
                        <option value="5X Sem juros">5X Sem juros</option>
                        <option value="10X Sem juros">10X Sem juros</option>
                        <option value="15X Sem juros">15X Sem juros</option>
                        <option value="20X Sem juros">20X Sem juros</option>

                    </select>


                
                </div>

                <br/>
                <br/>
                <Link to='/AnaliseCadastro' className="button3"> Solicitar Análise </Link>

            </div>

        </div>

        <Rodape/>

   </div>



  )
}

export default Simulacao