import "./index.scss"
import Header from "../../components/header"
import Footer from "../../components/footer"
import { useState } from "react"
import BotaoEspc from "../../components/botoesEsp"
import BotaoNum from "../../components/botoesNums"

export default function Calculadora() {
    let [valorTela, setValorTela] = useState("")
    let [acumulado, setAcumulado] = useState(0)

    let resultado = 0

    const zero = () => {
        setValorTela(valorTela + "0")
    }
    const um = () => {
        setValorTela(valorTela + "1")
    }
    const dois = () => {
        setValorTela(valorTela + "2")
    }
    const tres = () => {
        setValorTela(valorTela + "3")
    }
    const quatro = () => {
        setValorTela(valorTela + "4")
    }
    const cinco = () => {
        setValorTela(valorTela + "5")
    }
    const seis = () => {
        setValorTela(valorTela + "6")
    }
    const sete = () => {
        setValorTela(valorTela + "7")
    }
    const oito = () => {
        setValorTela(valorTela + "8")
    }
    const nove = () => {
        setValorTela(valorTela + "9")
    }

    const limpar = () =>{
        setValorTela(" ")
        setAcumulado(" ")
      }
    return (
        <div className="calculadora-geral">
            <header>
                <Header />
            </header>

            <main>
                
                <div className="calculadora">

                    <div className="tela-digitos">

                    </div>

                    <div className="botoes">

                        <div className="botoes-ld-esq">
                            <BotaoNum textBut={"7"} funcNum={sete}/>
                            <BotaoNum textBut={"8"} funcNum={oito}/>
                        </div> 
                        
                        <div className="botoes-ld-direito">

                        </div>

                    </div>

                </div>

            </main>

            <footer>
                <Footer />
            </footer>

        </div>
    )
}