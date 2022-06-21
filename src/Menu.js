import React from 'react';
import MiniMenu from './MiniMenu';
import {Link} from "react-router-dom";

const Menu = () => {

    const [exibe_menu, altera_exibemenu] = React.useState(false)

    require('./Menu.css')

    return ( 

        <div id='menu' className='menu'>

            <Link to='/'>

                <img src='https://i.imgur.com/JRjjC8H.png' />

            </Link>
            
                
            <div className='linksMenu'>

                <Link to='/Cadastro' > Cadastre-se </Link>
                <Link to='/Login' > Login </Link>

            </div>

            <div>

                <img onClick={()=> altera_exibemenu(!exibe_menu)} src='https://icon-library.com/images/menu-png-icon/menu-png-icon-16.jpg'  />
                <MiniMenu exibe_menu = {exibe_menu} />

            </div>

        </div>

    );
}
 
export default Menu;