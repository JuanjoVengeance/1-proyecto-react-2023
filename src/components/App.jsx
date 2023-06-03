import { Navigate, Outlet } from "react-router-dom"
import Menu from "./Menu/Menu"
import "./App.css"

const App = () => {

    if ( !localStorage.getItem("tokenJMmarket" )) return <Navigate to="/login" />

    return (
        <>
            <Menu />
            <Outlet />
        </>

    )
}

export default App