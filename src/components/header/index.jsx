import IconMenu from '../../assets/images/menuIcon.png'
import Menu from '../menuSideBar'
import { useState } from 'react';
import './index.scss'

export default function Header() {
    let [visibleMenu, setVisibleMenu] = useState(false)
    let [valor,setValor]=useState({
        left:"450px"
    })

    function changeVisibleFalse() {
        setVisibleMenu(false)
        verificadorStyle()
    }
    function changeVisibleTrue() {
        setVisibleMenu(true)
        verificadorStyle()
    }
    function verificadorStyle(){
        visibleMenu===true ? setValor({left:"450px"}) : setValor({left:"0px"})
    }


    return (
        <div className="main-header">
            <div className="barra-header">
                <div className="ldEsq">
                    <img src={IconMenu} alt="Menu" title="Menu" onClick={changeVisibleTrue} />
                    <h2>Matematicos</h2>
                </div>
            </div>

            <div className="sideBar-header" style={valor}>
                {visibleMenu ? <Menu visibleMenu_={changeVisibleFalse} /> : null}
            </div>
            
        </div>
    );
}