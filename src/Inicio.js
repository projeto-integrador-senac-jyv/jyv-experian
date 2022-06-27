import React from 'react';
import Menu from './Menu';
import QuemSomos from './QuemSomos';
import PerguntasFrequentes from './PerguntasFrequentes.js';
import Avaliacoes from './Avaliacoes';
import Rodape from './Rodape';

const Inicio = () => {

    return ( 

        <div>

            <Menu/>
            <QuemSomos/>
            <PerguntasFrequentes/>
            <Avaliacoes/>
            <br/>
            <br/>
            <br/>
            <Rodape/>

        </div>

     );
}
 
export default Inicio;