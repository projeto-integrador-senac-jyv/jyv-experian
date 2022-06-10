import React from 'react';
import Menu from "./Menu";
import Rodape from './Rodape';
import {Link} from "react-router-dom";

const MiniMenu = () => {

    require('./MiniMenu.css')

    return ( 

        <div id='MiniMenu' className='fundo_mini_menu' >

            <Menu/>

            <div className='container_mini_menu' >

                <Link to=''  > Meu perfil </Link>
                <br/>
                <Link to='' > Parceiros </Link>
                <br/>
                <Link to='' > Fale conosco </Link>
                <br/>
                <Link to='' > Sair </Link>

            </div>
            
            <Rodape/>

        </div>

    );
}
 
export default MiniMenu;