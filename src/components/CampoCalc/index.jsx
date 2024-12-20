import "./index.scss"

export default function CampoCalc({valor}){
    return(
        <div className="visor-calculadora">
            <input type="text" value={valor} />
        </div>
    )
}