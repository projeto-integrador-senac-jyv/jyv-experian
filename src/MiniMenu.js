import { faArrowRight, faArrowRightFromBracket, faHandshake, faPersonThroughWindow, faPhone, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {Link} from "react-router-dom";
import Sair from './Sair';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MiniMenu = (props) => {

    const exibe_menu = props.exibe_menu;
    const [exibe_sair, altera_exibesair] = React.useState(false)


    require('./MiniMenu.css')

    return ( 

        <div id='MiniMenu' className={ exibe_menu == true? '' : 'MiniMenu_invisivel ' + 'fundo_mini_menu animate__animated animate__fadeIn'} >

            <div className='container_mini_menu' >

                <FontAwesomeIcon icon={faUserAstronaut} />
                <Link to='/Simulacao' > Simular </Link>
                <br/>
                <FontAwesomeIcon icon={faHandshake} />
                <Link to='/parcerias' > Parceiros </Link>
                <br/>
                <FontAwesomeIcon icon={faPhone} />
                <Link to='/faleconosco' > Fale conosco </Link>
                <br/>
            

            </div> 

            <div className='Sair_centro' >

                <Sair exibe_sair = {exibe_sair} />

            </div>

        </div>

    );
}
 
export default MiniMenu;