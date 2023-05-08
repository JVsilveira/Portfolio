import React from 'react'
import Main from '../templates/Main'
import './contact.css'
import Insta from '../../assets/imgs/insta.png'
import Linkedin from '../../assets/imgs/linkedin.png'
import Email from '../../assets/imgs/email.png'
import Github from '../../assets/imgs/github.png'

export default () => (
  <Main>
    <div className="contact">
      Para falar comigo ou me conhecer melhor, basta tocar nas imagens a baixo
      que irão redirecionar aos devidos sites.
    </div>
    <div className="images">
      <a href="https://www.instagram.com/jvsilveira_03/">
        <img src={Insta} className="insta" />
      </a>
      <a href="http://www.linkedin.com/in/jo%C3%A3o-vitor-dos-santos-silveira/">
        <img src={Linkedin} className="linkedin" />
      </a>
      <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJvqsgThggTVRfgrVxVjPBjqckfXXfRzVFktRTmrsqpswwmMGLzhBNQlQjsPrSNJFSwpWbq">
        <img src={Email} className="email" />
      </a>
      <a href="https://github.com/JVsilveira">
        <img src={Github} className="github" />
      </a>
    </div>
  </Main>
)
