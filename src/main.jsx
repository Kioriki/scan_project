import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './main/Main.jsx'
import Man from './man/Man.jsx'
import Advantages from './advantages/Advantages.jsx'
import './index.css'
import Tarifs from './tarifs/Tarifs.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
    <Advantages/>
    <Man />
    <Tarifs />
  </React.StrictMode>,
)
