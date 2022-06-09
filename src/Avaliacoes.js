import React from 'react'

const Avaliacoes = () => {

    require('./Avaliacoes.css')

    return ( 

        <div id="avaliacoes" className='titulo'>

            <br/>
            <br/>

            <h1> AVALIAÇÕES DOS NOSSOS CLIENTES: </h1>

            <div className='av' >

                <div className='avs' >

                    <h2> Camila </h2>
                    <img src='https://vaptmed.com.br/wp-content/uploads/2021/08/62681-flat-icons-face-computer-design-avatar-icon.png' ></img>

                    <p>
                        "O que me conquistou foi que vocês se importam com a pessoa que está contratando o empréstimo."
                    </p>

                    <img src='https://portosulcomercial.com.br/imagem/5estrelas.png' className='estrelas' ></img>

                </div>

                <div className='avs' >

                    <h2> Gabriel </h2>
                    <img src='https://cdn-icons-png.flaticon.com/512/306/306473.png' ></img>

                    <p>
                        "O dinheiro da Creditas caiu superrápido e aí, deu todo certo! 
                        Hoje em dia, eu me considero 100% recuperada e eu sou muito grata pelo que a Creditas fez pra mim."
                    </p>

                    <img src='https://portosulcomercial.com.br/imagem/5estrelas.png' className='estrelas' ></img>

                </div>

                <div className='avs' >

                    <h2> Júlia </h2>
                    <img src='https://icons.veryicon.com/png/o/business/multi-color-financial-and-business-icons/user-139.png' ></img>
                    
                    <p>
                        Eu troquei uma dívida ruim, com juros altos, por uma dívida boa. Agora, tenho controle e posso investir no meu negócio.
                    </p>

                    <img src='https://portosulcomercial.com.br/imagem/5estrelas.png' className='estrelas' ></img>

                </div>

            </div>


        </div>

    );
}
 
export default Avaliacoes;