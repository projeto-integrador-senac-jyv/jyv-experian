import React from 'react';
import {Link} from "react-router-dom";

const Sair = (props) => {

    const exibe_sair = props.exibe_sair;

    require('./Sair.css')

    return ( 

        <div className={ exibe_sair == true? '' : 'Sair_invisivel ' + 'Sair_fundo' }>

            <div className='Sair_container' >

                <h1 className='cor_h1'>  Tem certeza que deseja sair? </h1>

                <div className='Links'>

                    <Link to='' className='Sair_button'> Cancelar </Link>
                    <Link to='/' className='Sair_button'> Sair </Link>

                </div>

            </div>

        </div>

    );
}
 
export default Sair;