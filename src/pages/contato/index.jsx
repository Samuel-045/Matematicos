import "./index.scss"
import Header from "../../components/header"
import Titulo from "../../components/artigosTitulo"
import Paragrafo from "../../components/artigosConteudo"

export default function contato(){
    return(
        <div className="contato-geral">
            <header>
                <Header/>
            </header>
            
            <main>
                <Titulo titulo={"Formas de contato"}  />

                <Paragrafo conteudo={"Para entrar em contato com a nossa equipe há os seguintes canais de contato: "}/>
                <Paragrafo conteudo={"E-mail: matMaticos@gmail.com"} />
                <Paragrafo conteudo={"Telefone : (15)98756-9081"} />
                <Paragrafo conteudo={"Telefone : (15)79736-9551"} />
                <Paragrafo conteudo={"Telefone : (15)59146-7521"} />
                <Paragrafo conteudo={"Será um prazer poder sanar suas dúvidas e poder te ajudar!"} />
            </main>
        </div>
    )
}