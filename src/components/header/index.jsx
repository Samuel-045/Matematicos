import MenuSB from '../menuSideBar'
import MenuNAV from '../menuNav'
import { useEffect, useRef, useState } from 'react';
import './index.scss'

export default function Header() {
    let [visibleMenu, setVisibleMenu] = useState(false)
    let [tamanhoTela, setTamanhoTela] = useState(window.innerWidth)
    let [posicaoSB, setPosicaoSB] = useState({
        left: "-400px"
    })

    const btnAbrir = useRef(null)
    const btnFechar = useRef(null)

    function changeVisibleFalse() {
        setVisibleMenu(false)
        verificadorStyle()
        document.body.style.overflowY = 'auto'

    }
    function changeVisibleTrue() {
        setVisibleMenu(true)
        verificadorStyle()
        document.body.style.overflowY = 'hidden'

    }
    function verificadorStyle() {
        visibleMenu === true ? setPosicaoSB({ left: "-400px" }) : setPosicaoSB({ left: "0px" })
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
                    <div ref={btnAbrir}>
                        <img src='./assets/images/menuIcon.png' alt="Menu" title="Menu" onClick={changeVisibleTrue} />
                    </div>

                    <h2>Matematicos</h2>
                </div>
            </div>

            <div className="sideBar-header" style={posicaoSB}>
                {tamanhoTela < 489 ? 
                    <div className= {`sideBar-header ${visibleMenu ? 'aberto' : 'fechado'}`} ref={btnFechar}>
                        <MenuSB className='menu-sb' visibleMenu_={changeVisibleFalse} /> 
                    </div>                    
                    : 
                    <MenuNAV className='menu-nav' />}
                {/* */}
            </div>

        </div>
    );
}