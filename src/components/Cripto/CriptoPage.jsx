// import { useParams } from "react-router-dom"

// const CriptoPage = () => {

//     const params = useParams()

//     return(
//         <h1>Soy la criptomoneda {params.id}</h1>
//     )
// }
// import { useEffect, useState } from 'react'
// import axios from 'axios'
import { useParams } from 'react-router-dom'
import "./CriptoPage.css"
import usePetition from '../../hooks/usePetition'
import CriptoInfo from './Info/CriptoInfo'
import CriptoHistorial from './Info/CriptoHistorial'
// import Menu from './Menu/Menu'

const CriptoPage = () => {

const params = useParams()
// const API_URL = import.meta.env.VITE_API_URL
// const [cripto, setCripto] = useState({})
// const [history, setHistory] = useState([])

// useEffect( () => {
//       axios.get(`${API_URL}assets/${params.id}`)
//       .then((data) => {
//         setCripto(data.data.data)
//       })
//       .catch(() => {
//         console.error("La petición falló")
//       })

//       axios.get(`${API_URL}assets/${params.id}/history?interval=d1`)
//       .then((data) => {
//         setHistory(data.data.data)
//       })
//       .catch(e => console.error(e))
//        }, [history])

const [cripto, cargandoCripto] = usePetition(`assets/${params.id}`)
const [history, cargandoHistory] = usePetition(`assets/${params.id}/history?interval=d1`)

if (cargandoCripto || cargandoHistory) return <span>Cargando...</span>
       
  return (
    //  (1 + 5 === 2) && ()
    <div className='cripto-page-container'>
    {cripto && <CriptoInfo cripto={cripto} />  }
    {history && <CriptoHistorial history={history} />}
  </div>

  )

}




export default CriptoPage