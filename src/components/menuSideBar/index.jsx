import './index.scss'
import { SlArrowRight } from "react-icons/sl";
import { BiX } from "react-icons/bi";

export default function Menu({visibleMenu_}){
    function closeSideBar(){
        visibleMenu_(false)
    }

    return(
        <div className="main-menu" >
            <BiX className="icon-x" onClick={closeSideBar}/>
            <ul>
                <li><SlArrowRight className="icon-itens"/> Home</li>
                <li><SlArrowRight className="icon-itens"/> Calculadora</li>
                <li><SlArrowRight className="icon-itens"/> Contato</li>
            </ul>
        </div>
    );
}