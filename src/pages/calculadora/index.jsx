import "./index.scss"
import Header from "../../components/header"
import Footer from "../../components/footer"

export default function calculadora(){
    return(
        <div className="calculadora-geral">
            <header>
                <Header/>
            </header>
            
            <main>
                <p>calculadora</p>
            </main>
            
            <footer>
                <Footer/>
            </footer>

        </div>
    )
}