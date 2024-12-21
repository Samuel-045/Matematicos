import "./index.scss"
import Header from "../../components/header"
import Footer from "../../components/footer"
import { useState } from "react"
import BotaoEspc from "../../components/botoesEsp"
import BotaoNum from "../../components/botoesNums"
import CampoCalc from "../../components/CampoCalc"

export default function Calculadora() {
    let [valorTela, setValorTela] = useState("")
    let [acumulado, setAcumulado] = useState(0)
    let [opr, setOpr]= useState("")

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

    const soma = () => {
        setOpr("soma")
        setAcumulado(valorTela)
        setValorTela("")
    }
    const subtracao = () => {
        setOpr("subt")
        setAcumulado(valorTela)
        setValorTela("")
    }
    const multiplicacao = () => {
        setOpr("mult")
        setAcumulado(valorTela)
        setValorTela("")
    }
    const divisao = () => {
        setOpr("divi")
        setAcumulado(valorTela)
        setValorTela("")
    }

    const calculo = () => {
        if (opr === "soma") {
            setValorTela(parseInt(acumulado) + parseInt(valorTela))
        } else if (opr === "subt") {
            setValorTela(parseInt(acumulado) - parseInt(valorTela))
        } else if (opr === "mult") {
            setValorTela(parseInt(acumulado) * parseInt(valorTela))
        } else if (opr === "divi") {
            setValorTela(parseInt(acumulado) / parseInt(valorTela))
        } 
    }

    const limpar = () => {
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
                        <CampoCalc valor={valorTela} />
                    </div>

                    <div className="botoes">

                        <div className="botoes-ld-esq">
                            <BotaoNum textBut={"7"} funcNum={sete} />
                            <BotaoNum textBut={"8"} funcNum={oito} />
                            <BotaoNum textBut={"9"} funcNum={nove} />
                            <BotaoNum textBut={"4"} funcNum={quatro} />
                            <BotaoNum textBut={"5"} funcNum={cinco} />
                            <BotaoNum textBut={"6"} funcNum={seis} />
                            <BotaoNum textBut={"1"} funcNum={um} />
                            <BotaoNum textBut={"2"} funcNum={dois} />
                            <BotaoNum textBut={"3"} funcNum={tres} />
                            <BotaoNum textBut={"0"} funcNum={zero} />
                            <BotaoEspc textBut={"AC"} funcOpr={limpar} />
                            <BotaoEspc textBut={"="} funcOpr={calculo} />

                        </div>

                        <div className="botoes-ld-dir">
                            <BotaoEspc textBut={"÷"} funcOpr={divisao} />
                            <BotaoEspc textBut={"-"} funcOpr={subtracao} />
                            <BotaoEspc textBut={"+"} funcOpr={soma} />
                            <BotaoEspc textBut={"x"} funcOpr={multiplicacao} />
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