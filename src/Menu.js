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

                <Link to='/Simulacao' > SIMULE</Link>
                <Link to='/parcerias' > PARCEIROS</Link>
                
            </div>

            <div>

                <img onClick={()=> altera_exibemenu(!exibe_menu)} src='https://icon-library.com/images/menu-png-icon/menu-png-icon-16.jpg'  />
                <MiniMenu exibe_menu = {exibe_menu} />

            </div>
                
            <div> 
                <img  src='https://escolaeducacao.com.br/wp-content/uploads/2019/06/caixa-banco-codigo-104-750x430.jpeg'/>
                <img  src='https://newcdn.guiadoinvestidor.com.br/gdi-static/2020/10/itau-logo.jpg'/>
                <img src='https://media.tribunadointerior.com.br/2022/03/5e612fcd-santander.png'/>
                <img  src='https://www.jornalcontabil.com.br/wp-content/uploads/2018/11/concurso-pu%CC%81blico-bb-cursodememorizac%CC%A7a%CC%83o-2.jpg'/>
            </div>

        </div>
 
    )}
export default Menu;