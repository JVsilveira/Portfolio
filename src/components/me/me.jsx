import React from 'react'
import Main from '../templates/Main'
import Ilustracao1 from '../../assets/imgs/ilustracao1.png'
import './me.css'

export default () => (
  <Main>
    <div className="pag">
      <img src={Ilustracao1} className="Ilustracao1" alt="Ilustracao1" />
      <p className="saudacao"> Meu nome é </p>
      <p className="nome">João Vitor</p>
    </div>
    <div className="areaTexto">
      <div className="sobre">
        <p>
          Nasci no dia 07/03/2003, na cidade de Guaíba-RS. Descobri a paixão
          pela programação e desde então venho estudando com o objetivo de
          desempenhar com sucesso nessa profissão. Tenho a ambição de aprender
          cada vez mais, já tendo formação no curso de nível técnico em
          informática da escola Dr. Solon Tavares e no terceiro semestre do
          bacharelado de Ciência da Computação na Faculdade de Desenvolvimento
          do Rio Grande do Sul (FADERGS). Atualmente, desenvolvo diversos
          projetos em Javascript, CSS, HTML e JAVA para fins de aprendizado e
          aprimoramento das técnicas. Estou à procura de uma primeira
          oportunidade como desenvolvedor Front-End, apesar de também poder
          atuar na área do Back-End.
        </p>
      </div>
    </div>
  </Main>
)
