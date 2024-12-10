import MenuSB from '../menuSideBar'
import MenuNAV from '../menuNav'
import { useEffect, useRef, useState } from 'react';
import './index.scss'

export default function Header() {
    let [visibleMenu, setVisibleMenu] = useState(false)
    let [tamanhoTela, setTamanhoTela] = useState(window.innerWidth)

    const btnAbrir = useRef(null)
    const btnFechar = useRef(null)

    function changeVisibleFalse() {
        setVisibleMenu(false)
        document.body.style.overflowY = 'auto'
    }
    function changeVisibleTrue() {
        setVisibleMenu(true)
        document.body.style.overflowY = 'hidden'
    }

    useEffect(() => {
        document.body.style.overflowY = 'auto'
        const tamanhoTela_ = () => setTamanhoTela(window.innerWidth)

        window.addEventListener("resize", tamanhoTela_);

        return () => window.removeEventListener("resize", tamanhoTela_)
    }, [])

    return (
        <div className="main-header">

            <div className="ladoEsq-header">
                <div className="nomeMenu">
                    <div ref={btnAbrir}>
                        <img src='./assets/images/menuIcon.png' alt="Menu" title="Menu" onClick={changeVisibleTrue} />
                    </div>

                    <h2>Matematicos</h2>
                </div>
            </div>
 
            <div className="ladoDir-header">
                {tamanhoTela < 585 ? 
                    <div className= {`sideBar-header ${visibleMenu ? 'aberto' : 'fechado'}`} ref={btnFechar}>
                        <MenuSB visibleMenu_={changeVisibleFalse} /> 
                    </div>                    
                    : 
                    <div className='menu-nav'>
                        <MenuNAV/> 
                    </div>
                }
                
            </div>{/* */}

        </div>
    );
}