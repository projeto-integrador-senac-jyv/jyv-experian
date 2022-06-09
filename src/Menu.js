import React from 'react';
import {Link} from "react-router-dom";

const Menu = () => {

    require('./Menu.css')

    return ( 

        <div className='menu'>

            <Link to='/'>

                <img src='https://i.imgur.com/4VKksC4.png' />

            </Link>
            
                
            <div className='linksMenu'>

                <Link to='/Cadastro' > Cadastre-se </Link>
                <Link to='/Login' > Login </Link>

            </div>

            <div>

                <button >

                    <img src='https://icon-library.com/images/menu-png-icon/menu-png-icon-16.jpg'  />

                </button>

            </div>

        </div>

    );
}
 
export default Menu;