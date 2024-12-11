import "./index.scss"
import Header from "../../components/header"
import Titulo from "../../components/artigosTitulo"
import Paragrafo from "../../components/artigosConteudo"
import Footer from "../../components/footer"

export default function contato(){
    return(
        <div className="contato-geral">
            <header>
                <Header/>
            </header>
            
            <main>
                <Titulo titulo={"Formas de contato"}  />

                <Paragrafo conteudo={"Para entrar em contato com a nossa equipe existem quatro maneiras: "}/>
                <Paragrafo conteudo={"Através do e-mail: matMaticos@gmail.com"} />
                <Paragrafo conteudo={"Ou através dos seguintes números de telefone:"} />
                <Paragrafo conteudo={"Telefone : (15)98756-9081"} />
                <Paragrafo conteudo={"Telefone : (15)79736-9551"} />
                <Paragrafo conteudo={"Telefone : (15)59146-7521"} />
                <Paragrafo conteudo={"Será um prazer poder sanar suas dúvidas e poder te ajudar!"} />
            </main>

            <footer>
                <Footer/>
            </footer>
        </div>
    )
}