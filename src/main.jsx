import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Footer from './mainPage/footer/Footer.jsx'
import Header from './mainPage/header/Header.jsx'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <App />
    <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
