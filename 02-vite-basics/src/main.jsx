import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Rabin from './Rabin.jsx'


createRoot(document.getElementById('root')).render(
    <>
    <App/>
    <Rabin/>
    </>
)
