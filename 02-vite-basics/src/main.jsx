import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Rabin from './Rabin.jsx'

//Lets design our own react element using objects. Reacts actually sees all the written html  as objects and not as actual html we write

const reactElement = React.createElement(
    'a', // Type of element (e.g., div, span, h1)
    {href: 'https://google.com', target:'_blank'}, // Props (attributes) for the element
    'click to visit googl' // Children (content inside the element)

)
createRoot(document.getElementById('root')).render(
    // <>
    // <App/>
    // <Rabin/>
    // </>
    reactElement
    
)
