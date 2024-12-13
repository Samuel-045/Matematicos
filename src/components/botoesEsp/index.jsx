import "./index.scss"

export default function BotaoEspc({funcAc, textBut}){
    return(
        <div className="botaoEspc-geral">
            <button onClick={e=>{
                e.preventDefault()
                funcAc()
            }}>
                {textBut}
            </button>
        </div>
    )
}