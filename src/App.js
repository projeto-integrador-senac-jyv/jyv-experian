import React from 'react';
import Menu from './Menu';
import QuemSomos from './QuemSomos';
import PerguntasFrequentes from './PerguntasFrequentes.js';
import Avaliacoes from './Avaliacoes';
import MiniMenu from './MiniMenu';

function App () {

    require ("./App.css")

    return(

        <div>

            <Menu/>
            <QuemSomos/>
            <PerguntasFrequentes/>
            <Avaliacoes/>
            {
            ///<MiniMenu/>
            }

        </div>
    );

}
export default App;

/// Cor amarela: #daa520;
/// Cor roxa: #933999;