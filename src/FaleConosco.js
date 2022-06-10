import Menu from "./Menu";
import Rodape from './Rodape';
import {Link} from "react-router-dom";

function FaleConosco() {

    require("./FaleConosco.css")

    return (

        <div id="faleconosco" className="fale">

            <Menu/>

            <div className="faleconosco">

                <div className="conosco">

                    <h1> Fale Conosco </h1>
                    <p> Oferecemos diversos canais de comunicação. </p>
                    <p>   Converse com a gente sempre que quiser. </p>
                    <img width={700} src="https://i.imgur.com/L2eahlt.png"></img>

                </div>

                <div className="info">
                      
                    <div className="atendimento">
                        <img src="https://i.imgur.com/7SmJslD.png"></img>
                        <p> E-mail: jyvexperian@serasa.com.br </p>
                    </div>
                    
                    <div className="atendimento">
                        <img src="https://i.imgur.com/lBx4ekz.png"></img>
                        <p> Telefone: (16)3347-1365 </p>
                    </div>

                    <div className="atendimento">
                        <img src="https://i.imgur.com/eGYEZck.png"></img>
                        <p> Endereço: Av. Pres. Juscelino Kubitscheck, 100 </p>
                    </div>
                    
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.2386925713113!2d-47.87811808443349!3d-22.04046301307359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b876566ad4700b%3A0xe030b5b189e95c7e!2sSerasa%20Experian!5e0!3m2!1spt-BR!2sbr!4v1654883114533!5m2!1spt-BR!2sbr" width="100%" height="500" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </div>


            </div>


            <Rodape/>

        </div>


    );

    }

export default FaleConosco;