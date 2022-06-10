import Menu from "./Menu";
import Rodape from './Rodape';
import {Link} from "react-router-dom";

function MeuPerfil() {

    require("./MeuPerfil.css")

    return (
        <div id="simulacao" className="fundo">

            <Menu/>
            
            <div className="fundo5" >
               
                <div className="box5">

                    <div>
                        <h1>Meu Perfil</h1>
                    </div>
                    <div className="spr">

                    
                        <div>
                            
                            <img width={200} src='https://cdn-icons-png.flaticon.com/512/219/219969.png' ></img>
                        
                        </div>
                        <div className="letra">
                            <p>Nome:</p>
                            <p>E-MAIL:</p>
                            <p>Senha:</p>
                            <p>Telefone:</p>
                            <Link to='/MeuPerfil' > Meus Empréstimos</Link>
                        </div>
                    </div>
                        
                    
                </div>
                
                
            </div>
            
            <Rodape/>

        </div>
    );
}

export default MeuPerfil ;

