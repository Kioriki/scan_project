import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './main/Main.jsx'
import Advantages from './advantages/Advantages.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
    <Advantages/>
  </React.StrictMode>,
)
