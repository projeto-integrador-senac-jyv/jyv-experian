import { faArrowRight, faArrowRightFromBracket, faHandshake, faPersonThroughWindow, faPhone, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MiniMenu = () => {

    require('./MiniMenu.css')

    return ( 

        <div id='MiniMenu' className='fundo_mini_menu' >

            <div className='container_mini_menu' >

                <FontAwesomeIcon icon={faUserAstronaut} />
                <Link to=''  > Meu perfil </Link>
                <br/>
                <FontAwesomeIcon icon={faHandshake} />
                <Link to='/parcerias' > Parceiros </Link>
                <br/>
                <FontAwesomeIcon icon={faPhone} />
                <Link to='/faleconosco' > Fale conosco </Link>
                <br/>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
                <Link to='' > Sair </Link>

            </div>

        </div>

    );
}
 
export default MiniMenu;