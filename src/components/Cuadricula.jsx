import "./Cuadricula.css"
import Cripto from './Cripto/Cripto'
import usePetition from '../hooks/usePetition'
// import Menu from './Menu/Menu'

function Cuadricula() {

  // const API_URL = import.meta.env.VITE_API_URL

  // const [criptos, setCriptos] = useState()
  
  // useEffect( () => {
  //     axios.get(`${API_URL}assets`)
  //     // fetch("https://api.coincap.io/v2/assets")
  //     // .then((resp) => resp.json())
  //     .then((data) => {
  //       // console.log(data)
  //       setCriptos(data.data.data)
  //     })
  //     .catch(() => {
  //       console.error("La petición falló")
  //     })
  //      }, [])

  const [criptos] = usePetition("assets")

  if (!criptos) return <span>Cargando...</span>

  return (
    
    <div className="app-container">
      {/* <Menu /> */}
       <h1>Lista de criptomonedas</h1>
       <div className="cripto-container">
        { criptos.map(({id, name, priceUsd, symbol, changePercent24Hr}) => (
            <Cripto 
            key={id} 
            name={name} 
            priceUSd={priceUsd} 
            symbol={symbol} 
            changePercent24Hr={changePercent24Hr}
            id={id}
             />
            
        ) ) 
        }
       </div>
    </div>

  )
}

export default Cuadricula
