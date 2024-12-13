import "./index.scss"

export default function BotaoNum({funcNum,textBut}){
    return(
        <div className="botaoNum-geral">
            <button onClick={e=>{
                e.preventDefault()
                funcNum()
            }}>
                {textBut}
            </button>
        </div>
    )
}