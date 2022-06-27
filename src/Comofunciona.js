import React from "react";
import Menu from "./Menu";
import Rodape from "./Rodape";
import {Link} from "react-router-dom";

const ComoFunciona = () => {

    require('./ComoFunciona.css')

    return (  

        <div className="Adm">

            <Menu/>

           
            <h1 className="roxo"> Como funciona o empréstimo online da JYV? </h1>

            <div className="fundoAdm" >

                <div className="boxAdm" >

                    <p> Em poucos cliques, você pode ter em sua conta bancária o seu empréstimo pessoal online da JYV.  </p>
                    <h4> E-mails de aprovação recebidos em até 24h </h4>
                    <br/>
                  
                    <Link to='/Simulacao' className="button4" > Confira </Link>
                    <br/>
                    <br/>
                    
                </div>


            </div>

            <Rodape/>

        </div>

    );
}
 
export default ComoFunciona;