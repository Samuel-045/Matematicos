import IconMenu from '../../assets/images/menuIcon.png'
import MenuSB from '../menuSideBar'
import MenuNAV from '../menuNav'
import { useEffect, useState } from 'react';
import './index.scss'

export default function Header() {
    let [visibleMenu, setVisibleMenu] = useState(false)
    let [tamanhoTela, setTamanhoTela] = useState(window.innerWidth)
    let [posicaoSB,setPosicaoSB]=useState({
        left:"450px"
    })

    function changeVisibleFalse() {
        setVisibleMenu(false)
        verificadorStyle()
        document.body.style.overflowY='auto'
    }
    function changeVisibleTrue() {
        setVisibleMenu(true)
        verificadorStyle()
        document.body.style.overflowY='hidden'
    }
    function verificadorStyle(){
        visibleMenu===true ? setPosicaoSB({left:"-400px"}) : setPosicaoSB({left:"0px"})
    }

    useEffect(() => {
        const tamanhoTela_ = () => setTamanhoTela(window.innerWidth)
    
        window.addEventListener("resize", tamanhoTela_);
        
        return () => window.removeEventListener("resize", tamanhoTela_)
    }, [])

    return (
        <div className="main-header">
            
            <div className="barra-header">
                <div className="ldEsq">
                    <img src={IconMenu} alt="Menu" title="Menu" onClick={changeVisibleTrue} />
                    <h2>Matematicos</h2>
                </div>
            </div>

            <div className="sideBar-header" style={posicaoSB}>
                {tamanhoTela<489 ? <MenuSB visibleMenu_={changeVisibleFalse} /> : <MenuNAV className='menu-nav'/> }
                {/* */}
            </div>
            
        </div>
    );
}