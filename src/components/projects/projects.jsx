import React from 'react'
import Main from '../templates/Main'
import './projects.css'
import Flappy from '../../assets/imgs/flappy.png'
import Crud from '../../assets/imgs/crud.png'
import Calculadora from '../../assets/imgs/calculadora.png'
import EmObras from '../../assets/imgs/emObras.jpeg'

export default () => (
  <Main>
    <div className="auxilio">
      <div className="projects">
        {' '}
        Toque nas imagens para acessar alguns de meus projetos:{' '}
      </div>
      <div className="image">
        <a href="https://flappy-bird-37vjr9rwd-jvsilveira.vercel.app/">
          <img src={Flappy} className="flappy" />
        </a>
        <a href="https://crud-4bg3d82dr-jvsilveira.vercel.app/">
          <img src={Crud} className="crud" />
        </a>
        <a href="https://calculadora-rho-vert.vercel.app/">
          <img src={Calculadora} className="calculadora" />
        </a>
      </div>
      <div className="emProcesso">
        <img src={EmObras} className="calculadora" />
        <img src={EmObras} className="calculadora" />
        <img src={EmObras} className="calculadora" />
      </div>
    </div>
  </Main>
)
