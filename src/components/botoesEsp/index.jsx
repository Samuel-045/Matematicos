import "./index.scss"

export default function BotaoEspc({funcOpr, textBut}){
    return(
        <div className="botaoEspc-geral">
            <button onClick={e=>{
                e.preventDefault()
                funcOpr()
            }}>
                {textBut}
            </button>
        </div>
    )
}