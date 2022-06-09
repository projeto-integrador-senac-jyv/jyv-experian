import React from 'react'

const PerguntasFrequentes = () => {

    require('./PerguntasFrequentes.css')

    React.useEffect(()=>{
        const itens = document.querySelectorAll(".perguntasf li h2")
        for(const item of itens) {
            item.addEventListener('click', ()=>{
                const p = item.nextSibling
                if (p.style.display == 'block'){
                    p.style.display = 'none'
                }else{
                    p.style.display = 'block'
                }
            } )
        }
    },[])

    return ( 

        <div className='perguntasf' >

            <br/>

            <h1> PERGUNTAS FREQUENTES </h1>

            <br/>

            <ul className='listaPerguntas'>

                <li>

                    <h2> A JYV É SEGURA? </h2>
                    <p className='animate__animated animate__flipInX' >
                    Sim, como as demais instituições sérias e confiáveis, 
                    seguimos estritamente as normas do Banco Central. 
                    Isso significa que não realizamos NENHUM tipo de cobrança antecipada em pedidos de empréstimo, 
                    tendo em vista que isso é ILEGAL. Uma empresa confiável não pede depósitos de empréstimo, 
                    evite cair em golpes!
                    </p>

                </li>

                <li>

                    <h2> QUEM PODE FAZER UM PEDIDO DE EMPRÉSTIMO NA JYV? </h2>
                    <p className='animate__animated animate__flipInX' >
                        Qualquer pessoa maior de 18 anos que possua um comprovante de renda.
                    </p>

                </li>

                <li>

                    <h2> QUAIS DOCUMENTOS SÃO NECESSÁRIOS PARA PEDIR MEU EMPRÉSTIMO? </h2>
                    <p className='animate__animated animate__flipInX' > 
                        Para o empréstimo pessoal, alguns documentos podem ser solicitados como comprovantes. Sendo eles:
                        CPF, TELEFONE, CNPJ (Caso você seja empreendedor), DATA DE NASCIMENTO, etc...
                    </p>

                </li>

                <li>

                    <h2> EU CONSIGO UM CRÉDITO PESSOAL COM NOME NEGATIVO? </h2>
                    <p className='animate__animated animate__flipInX' >
                        Várias empresas disponibilizam empréstimo pessoal para consumidores com dívidas em aberto. 
                        Cadastre-se gratuitamente na JYV EXPERIAN, 
                        faça uma simulação e veja as ofertas que podem estar disponíveis a você.
                    </p>

                </li>

            </ul>

        </div>

    );
}
 
export default PerguntasFrequentes;