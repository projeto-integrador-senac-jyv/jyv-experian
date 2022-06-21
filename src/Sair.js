import React from 'react';
import {Link} from "react-router-dom";

const Sair = () => {

    require('./Sair.css')

    return ( 

        <div className='Sair_fundo' >

            <div className='Sair_container' >

                <h1>  Tem certeza que deseja sair? </h1>

                <Link to='' className='Sair_button'> Cancelar </Link>
                <Link to='' className='Sair_button'> Sair </Link>

            </div>

        </div>

    );
}
 
export default Sair;