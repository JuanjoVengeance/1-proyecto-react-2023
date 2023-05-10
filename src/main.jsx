import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import "./main.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Saludo from './components/Saludo.jsx'
import Pagina404 from './components/404.jsx'
import Menu from './components/Menu/Menu.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <Menu />
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/saludo' element={<Saludo />} />
                <Route path='*' element={<Pagina404 />} />
            </Routes>
        </BrowserRouter>
    </>
)
