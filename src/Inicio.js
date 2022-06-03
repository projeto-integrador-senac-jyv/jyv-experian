import React from 'react';
import Menu from './Menu';
import QuemSomos from './QuemSomos';
import PerguntasFrequentes from './PerguntasFrequentes.js';
import Avaliacoes from './Avaliacoes';

const Inicio = () => {
    return ( 

        <div>
            <Menu/>
            <QuemSomos/>
            <PerguntasFrequentes/>
            <Avaliacoes/>
        </div>

     );
}
 
export default Inicio;