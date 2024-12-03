import './index.scss'
import { Link } from 'react-router-dom';

export default function menuNav() {
    return (
        <nav className='main-nav'>
            <ul>
                <li><Link to="/" className='link'>Home</Link></li>
                <li><Link to="/calculadora" className='link'>Calculadora</Link></li>
                <li><Link to="/contato" className='link'>Contato</Link></li>
            </ul>
        </nav>
    );
}