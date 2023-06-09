import { Link } from "react-router-dom"
import "./Cripto.css"

const Cripto = ({ id, name, priceUSd, symbol, changePercent24Hr }) => {
    // var estado;
    // if (changePercent24Hr<0){
    //         estado = "negativo"
    // }
    // else{
    //         estado = "positivo"
    // }
    return (
        <div className="cripto">
                <Link to ={`/criptomonedas/${id}`}>
                <h3>{name}</h3>
                <div className="info">
                    <p><span className="label">Precio: </span>${parseFloat(priceUSd).toFixed(4)}</p>
                    <p><span className="label">Código: </span>{symbol}</p>
                    <p>
                        <span className="label">Porcentaje de cambio: </span>
                        {/* <span className={estado}>{parseFloat(changePercent24Hr).toFixed(3)}%</span> */}
                        <span className={ parseFloat(changePercent24Hr) > 0 ? "positivo" : "negativo" }>
                        {parseFloat(changePercent24Hr).toFixed(3)}%</span>
                    </p>
                </div>
        </Link>
            </div>
    )
}

export default Cripto