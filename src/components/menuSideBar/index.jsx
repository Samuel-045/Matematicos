import './index.scss'
import { SlArrowRight } from "react-icons/sl";
import { BiX } from "react-icons/bi";
import { Link } from 'react-router-dom';

export default function MenuSB({visibleMenu_}){

    return(
        <div className="main-menu" >
            <BiX className="icon-x" onClick={visibleMenu_}/>
            <ul>
                <li><Link to="/" className='link'><SlArrowRight className="icon-itens"/> Home </Link></li>
                <li><Link to="/calculadora" className='link'><SlArrowRight className="icon-itens"/> Calculadora</Link></li>
                <li><Link to="/contato" className='link'><SlArrowRight className="icon-itens"/> Contato</Link></li>
            </ul>
        </div>
    );
}