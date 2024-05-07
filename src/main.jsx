import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './mainPage/main/Main.jsx'
import Man from './mainPage/man/Man.jsx'
import Advantages from './mainPage/advantages/Advantages.jsx'
import './index.css'
import Tarifs from './mainPage/tarifs/Tarifs.jsx'
import Footer from './mainPage/footer/Footer.jsx'
import Header from './mainPage/header/Header.jsx'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />

    <Main />
    <Advantages/>
    <Man />
    <Tarifs />
    <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
