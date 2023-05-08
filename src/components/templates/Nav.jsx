import './Nav.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => (
  <aside className="menu-area">
    <nav className="menu">
      <NavLink to="/">
        <i className="fa fa-home"> Início</i>
      </NavLink>
      <NavLink to="/me">
        <i className="fa fa-user"> Sobre mim</i>
      </NavLink>
      <NavLink to="/project">
        <i class="fa fa-briefcase"> Projetos</i>
      </NavLink>
      <NavLink to="/contact">
        <i class="fa fa-phone"> Contato</i>
      </NavLink>
    </nav>
  </aside>
)
