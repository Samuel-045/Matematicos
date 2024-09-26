import IconMenu from '../../assets/images/menuIcon.png'
import Menu from '../menuSideBar'
import { useState } from 'react';
import './index.scss'


export default function Header() {
    let [visibleMenu, setVisibleMenu] = useState(false)
    let [vrf, setVrf] = useState("false")
    let styleSideBar = {}

    function changeVisible() {
        setVisibleMenu(true)
        setVrf(false)
        
        console.log('n')
    }
    function verificadorStyle(){
        if(visibleMenu){
            styleSideBar = {
                left:'0'
            }
        }else{
            styleSideBar = {
                left:'-500px'
            }
        }
    }


    return (
        <div className="main-header">
            <div className="barra-header">
                <div className="ldEsq">
                    <img src={IconMenu} alt="Menu" title="Menu" onClick={changeVisible} />
                    <h2>Matematicos</h2>
                </div>
            </div>

            <div className="sideBar-header">
                {visibleMenu ? <Menu visibleMenu_={setVisibleMenu} value={vrf} style={styleSideBar}/> : null}
            </div>
            
        </div>
    );
}