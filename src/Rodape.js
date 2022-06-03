import React from 'react';

const Rodape = () => {

    require('./Rodape.css')

    return (  
    
        <div className='rodape'>

            <div className='contato'>

                <h1> FORMAS DE CONTATO: </h1>
                <img src='https://i.imgur.com/qR9vzjb.png' ></img>
                
            </div>

            <div> 

                <h1> NOSSOS COLABORADORES: </h1>
                <p> Júlia Jóia </p>
                <p> Júlia Stefany </p>
                <p> João Rios </p>
                <p> Yasmin Graciano </p>
                <p> Vinícius Moura </p>

            </div>

            <div className='contato' >

                <h1> BAIXE NOSSO APLICATIVO: </h1>
                <img src='https://i.imgur.com/1HIK5kB.png' ></img>

            </div>


        </div>

    );
}
 
export default Rodape;