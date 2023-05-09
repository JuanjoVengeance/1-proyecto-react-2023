import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./main.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Saludo from './Saludo.jsx'
import Pagina404 from './404.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/saludo' element={<Saludo />} />
            <Route path='*' element={<Pagina404 />} />
        </Routes>
    </BrowserRouter>
)
