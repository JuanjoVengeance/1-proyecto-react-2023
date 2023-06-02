import { Link } from "react-router-dom"
import "./Home.css"

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="title">Hola, bienvenido a mi sitio web</h1>
            <p className="subtitle">Conoce las 100 criptos más usadas</p>
            <Link to="/criptomonedas" className="link">Ver criptomonedas</Link>
        </div>
    )
}

export default Home