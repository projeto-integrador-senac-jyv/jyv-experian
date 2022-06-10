import React from 'react';
 

const MiniMenu = () => {

    require('./MiniMenu.css')

    return ( 

        <div id='minimenu' className='mini_menu' >


            <a href='#'  > Meu perfil </a>
            <br/>
            <a href='#' > Parceiros </a>
            <br/>
            <a href='#' > Fale conosco </a>
            <br/>
            <a href='#' > Sair </a>
            
            

        </div>

    );
}
 
export default MiniMenu;