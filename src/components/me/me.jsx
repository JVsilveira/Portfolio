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
          Nascido em 07 de março de 2003, na cidade de Guaíba-RS, atuei como
          Suporte TI nos Registros Públicos de Barra do Ribeiro por 2 anos e 2
          meses, realizando manutenção de computadores, servidores e bancos de
          dados. Desde então, tenho me dedicado ao estudo da programação com o
          objetivo de desempenhar com sucesso nesta profissão. Possuo formação
          técnica em informática pela escola Dr. Solon Tavares e atualmente
          estou cursando o terceiro semestre do Bacharelado em Ciência da
          Computação na Faculdade de Desenvolvimento do Rio Grande do Sul
          (FADERGS). Desenvolvo diversos projetos em JavaScript, CSS, HTML e
          Java utilizando como ferramentas o React, Angular e Vue, a fim de
          aprimorar minhas habilidades e conhecimentos. Busco uma oportunidade
          como desenvolvedor Front-End, embora também possa atuar na área de
          Back-End.
        </p>
      </div>
    </div>
  </Main>
)
