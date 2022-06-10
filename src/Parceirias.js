
import Menu from "./Menu";
import Rodape from './Rodape';


function Parceirias() {

    require("./Parceirias.css")

    return (
        <div id="Parceirias" className="fundo">

            <Menu/>
            
            <h1>Nossos Parceiros  </h1>
            
            <div className="Parceiros">

                
                <br/>
                <br/>
                
                <img width={300} src='https://www.jornalcontabil.com.br/wp-content/uploads/2018/11/concurso-pu%CC%81blico-bb-cursodememorizac%CC%A7a%CC%83o-2.jpg'></img>
                
                <img width={317} src='https://banco.bradesco/assets/classic/img/linkedin.png'></img>
                
                <img width={305} src='https://media.tribunadointerior.com.br/2022/03/5e612fcd-santander.png'></img>
               
                <img width={262} src='https://criptonizando.com/wp-content/uploads/2020/10/itau-banco-novidade-funcionalidade-economia-cartao-credito-compra-internacional-real-brasil-dinheiro-.jpg'></img>
                
                <img width={291} src='https://escolaeducacao.com.br/wp-content/uploads/2019/06/caixa-banco-codigo-104-750x430.jpeg'></img>
                <br/>
                <br/>
                <img width={297} src='https://www.oficinadanet.com.br/imagens/post/32145/picpay.png'></img>

                <img width={318} src='https://www.datocms-assets.com/39397/1614171395-open-graph-logo-large-br.png'></img>

                <img width={247} src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Logo_Banrisul.svg/1200px-Logo_Banrisul.svg.png'></img>

                <img width={300} src='https://tecnonoticias.com.br/blogs/humor-do-mercado/wp-content/uploads/2021/11/Banco-Inter-via-Youtube-1024x556.png'></img>

                <img width={235} src='https://telefone0800.net.br/wp-content/uploads/2017/03/Banco-Votorantim.jpg'></img>
                
                
                
            </div>
                
                
            
            <Rodape/>

        </div>
    );
}

export default Parceirias ;