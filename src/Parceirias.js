
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
                <br/>
                <br/>
                <img width={300} src='https://banco.bradesco/assets/classic/img/linkedin.png'></img>
                <br/>
                <br/>
                <img width={300} src='https://media.tribunadointerior.com.br/2022/03/5e612fcd-santander.png'></img>
                <br/>
                <br/>
                <img width={300} src='https://criptonizando.com/wp-content/uploads/2020/10/itau-banco-novidade-funcionalidade-economia-cartao-credito-compra-internacional-real-brasil-dinheiro-.jpg'></img>
                <br/>
                <br/>
                <img width={300} src='https://escolaeducacao.com.br/wp-content/uploads/2019/06/caixa-banco-codigo-104-750x430.jpeg'></img>
                <br/>
                <br/>
                <img width={300} src='https://files.clicksergipe.com.br//thumbs.php?arquivo=1/conteudos/2020/05/59326/11893b52f4749e98f9b398ac10165c04.jpg&largura=1200'></img>
                <br/>
                <br/>
                <img width={300} src='https://telefone0800.net.br/wp-content/uploads/2017/03/Banco-Votorantim.jpg'></img>
                <br/>
                <br/>
                <img width={300} src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Logo_Banrisul.svg/1200px-Logo_Banrisul.svg.png'></img>
                <br/>
                <br/>
                <img width={300} src='https://www.oficinadanet.com.br/imagens/post/32145/picpay.png'></img>
                <br/>
                <br/>
                <img width={300} src='https://www.datocms-assets.com/39397/1614171395-open-graph-logo-large-br.png'></img>
                
            </div>
                
                
            
            <Rodape/>

        </div>
    );
}

export default Parceirias ;