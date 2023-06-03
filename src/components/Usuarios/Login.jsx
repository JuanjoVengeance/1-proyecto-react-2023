import axios from "axios"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import "./Login.css"

const Login = () => {

    const navigation = useNavigate()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const [cargando, setCargando] = useState(false)
    const [error, setError] = useState()

    const submit = (e) => {
        e.preventDefault()
        setCargando(true)
        setError(null)
        axios.post(`https://reqres.in/api/login`, user)
        .then(data => {
            setCargando(false)
            localStorage.setItem("tokenJMmarket", data.data.token)
            navigation("/")
        })
        .catch(e => {
            setCargando(false)
            console.error(e)
            setError(e.response.data.error)
        })
    }

    if ( localStorage.getItem("tokenJMmarket" )) return <Navigate to="/" />

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={submit}>
                <div className="field">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input onChange={(e) => {
                        setUser({
                            ...user,
                            email: e.target.value
                        })
                    }} type="email" name="email" id="email" />
                </div>
                <div className="field">
                    <label htmlFor="password">Contraseña</label>
                    <input onChange={(e) => {
                        setUser({
                            ...user,
                            password: e.target.value
                        })
                    }} type="password" name="password" id="password" />
                </div>
                <div className="submit">
                    <input 
                    type="submit" 
                    value={cargando ? "cargando..." : "Ingresar"} 
                    className="link" 
                    />
                </div>
            </form>
            {
                error && <span className="error ">Error: {error}</span>
            }
        </div>
        
    )
}

export default Login