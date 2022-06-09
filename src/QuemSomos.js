import React from 'react';
import {Link} from "react-router-dom";
const QuemSomos = () => {

    require('./QuemSomos.css')

    return (  

        <div className='container' >

            <div className='div1'>


                <h1> QUEM SOMOS? </h1>

                <h3> 

                    Somos uma fintech do Grupo Serasa Experian e 
                    atuamos no mercado de 
                    crédito financeiro
                    desde 2012. 

                </h3>

                <h3>

                    Nascemos com o objetivo 
                    de facilitar o acesso ao crédito e 
                    reestabelecer
                    sua saúde financeira.

                </h3>

            </div>

            <div  className='div2'>

                <img src='https://i.imgur.com/Mx2g0xs.png'/>

            </div>

            <div className='div3' >

                <br/>

                <h1> SIMULE JÁ </h1>

                <br/>

                <Link to='/Simulacao' className='button3'> Clique aqui! 
                </Link>

            </div>

        </div>

    );
}
 
export default QuemSomos;   