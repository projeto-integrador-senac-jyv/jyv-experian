
import Menu from "./Menu";
import Rodape from './Rodape';


function Parceirias() {

    require("./Parcerias.css")

    return (
        <div >

            <Menu/>
            
            <h1>Conheça nossos Parceiros:  </h1>
            
            <div id="Parcerias" className="fundo">

                
                <br/>
                <br/>
                
                <img  src='https://www.jornalcontabil.com.br/wp-content/uploads/2018/11/concurso-pu%CC%81blico-bb-cursodememorizac%CC%A7a%CC%83o-2.jpg'></img>
                
                <img  src='https://banco.bradesco/assets/classic/img/linkedin.png'></img>
                
                <img src='https://media.tribunadointerior.com.br/2022/03/5e612fcd-santander.png'></img>
                <br/>
                <br/>
                <br/>
                <img  src='https://escolaeducacao.com.br/wp-content/uploads/2019/06/caixa-banco-codigo-104-750x430.jpeg'></img>
                
                <img  src='https://newcdn.guiadoinvestidor.com.br/gdi-static/2020/10/itau-logo.jpg'></img>
                
                <img  src='https://www.oficinadanet.com.br/imagens/post/32145/picpay.png'></img>

                <br/>
                <br/>
                <br/>
                <img  src='https://www.datocms-assets.com/39397/1614171395-open-graph-logo-large-br.png'></img>

                <img  src='https://tecnonoticias.com.br/blogs/humor-do-mercado/wp-content/uploads/2021/11/Banco-Inter-via-Youtube-1024x556.png'></img>

                <img  src='https://www.foregon.com/blog/wp-content/uploads/2020/05/telefonesparacontatobanrisul.jpeg'></img>
                <br/>
                <br/>
                <br/>
                <br/>
                
                
            </div>
                
                
            
            <Rodape/>

        </div>
    );
}

export default Parceirias ;