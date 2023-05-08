import './App.css'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/templates/Header'
import React from 'react'
import Nav from '../components/templates/Nav'
import Perfil from '../components/templates/Perfil'
import Footer from '../components/templates/Footer'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

export default () => (
  <BrowserRouter>
    <div className="App">
      <div className="cantoEsquerdo">
        <Perfil />
        <Nav />
      </div>
      <div className="alinhamento">
        <Header />
        <Routes />
        <Footer />
      </div>
    </div>
  </BrowserRouter>
)
