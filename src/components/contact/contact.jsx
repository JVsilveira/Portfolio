import React from 'react'
import Main from '../templates/Main'
import './contact.css'
import Insta from '../../assets/imgs/insta.png'
import Linkedin from '../../assets/imgs/linkedin.png'
import Github from '../../assets/imgs/github.png'

export default () => (
  <Main>
    <div className="pag">
      <div className="contato">
        <div className="contact">
          Para falar comigo ou me conhecer melhor, basta tocar nas imagens a
          baixo que irão redirecionar aos devidos sites.
        </div>
        <div className="images">
          <a
            className="ajustaImagem"
            href="https://www.instagram.com/jvsilveira_03/"
          >
            <img src={Insta} className="insta" />
          </a>
          <a
            className="ajustaImagem"
            href="http://www.linkedin.com/in/jo%C3%A3o-vitor-dos-santos-silveira/"
          >
            <img src={Linkedin} className="linkedin" />
          </a>
          <a className="ajustaImagem" href="https://github.com/JVsilveira">
            <img src={Github} className="github" />
          </a>
        </div>
      </div>
    </div>
  </Main>
)
