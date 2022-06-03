import React from 'react';

const Menu = () => {

    require('./Menu.css')

    return ( 

        <div className='menu'>

            <button onClick='./Inicio'>

                <img src='https://i.imgur.com/4VKksC4.png' ></img> 

            </button>
            
                
            <div className='a'>

                <br/>

                <a href='./Cadastro' > Cadastre-se  </a>
                <a href='./Login' > Login </a>

                <br/>
                <br/>

            </div>

            <div>

                <button onClick='#' >

                    <img src='https://icon-library.com/images/menu-png-icon/menu-png-icon-16.jpg'  ></img>

                </button>

            </div>

        </div>

    );
}
 
export default Menu;