import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { black, lightBlue, blue, brown } from "../Utils/tokens"
import Colchão from "../../img/ServicosMatress.png"
import Sofa from "../../img/ServicosCouch.png"
import Carpete from "../../img/ServicosCarpet.png"
import { ServicoButton } from "./servico-button"
import { useIsSmallScreen } from "../Utils/useIsSmallScreen"

export const SERVICOS = {
  colchoes: {
    title: "Colchões",
    content:
      "Sendo os colchões fundamentais ao descanso e recuperação de energias, não deixe que os mesmos acumulem sujidade e desagradáveis odores. Elimine os ácaros que provocam alergias e irritações cutâneas.",

    image: { alt: "colchão 3D", src: Colchão },
  },
  sofas: {
    title: "Sofás & Maples",
    content:
      "Sofás e maples são peças dos nossos lares fundamentais ao laser e descanso e com os quais, todos os dias, contactamos fisicamente.Conte connosco para contribuirmos para o seu maior conforto.",
    image: { alt: "Sofá 3D", src: Sofa },
  },
  carpetes: {
    title: "Carpetes & Tapeçarias",
    content:
      "O nosso método de limpeza de Tapetes, Carpetes e Alcatifas extrai todo o pó e ácaros entranhados nas fibras têxteis, removendo também o enegrecimento, manchas e nódoas.",
    image: { alt: "Carpete 3D", src: Carpete },
  },
}

export const Servicos = () => {
  const [service, setService] = React.useState("colchoes")
  const isSmallScreen = useIsSmallScreen()

  return (
    <StyledServicos id='servico'>
      {!isSmallScreen && <h2 children={"SERVIÇOS"} />}
      <StyledFrame>
        <img
          src={SERVICOS[service].image.src}
          alt={SERVICOS[service].image.alt}
          loading='lazy'
        />
      </StyledFrame>
      <Wrapper>
        {isSmallScreen && <h2 children={"SERVIÇOS"} />}
        <nav>
          <ServicoButton {...{ service, setService }} type='colchoes' />
          <ServicoButton {...{ service, setService }} type='sofas' />
          <ServicoButton {...{ service, setService }} type='carpetes' />
        </nav>
        <p children={SERVICOS[service].content} />
        <Button>
          <Link to='/servicos' children={"Ler mais"} />
        </Button>
      </Wrapper>
    </StyledServicos>
  )
}

const StyledServicos = styled.section`
  overflow: hidden;
  color: ${black};
  padding: 2rem 5%;
  min-height: 60vh;
  display: flex;
  align-items: center;
  flex-basis: 100%;
  & h2 {
    font-weight: 900;
    width: min(100%, 33ch);
  }
  @media screen and (max-width: 1023px) {
    flex-direction: column;
    justify-content: space-between;
  }
`

const StyledFrame = styled.div`
  background: linear-gradient(to bottom, ${lightBlue}, ${blue});
  outline: 1rem solid ${black};
  position: relative;
  margin: 2rem auto;
  height: min(60vw, 15rem);
  width: min(80vw, 20rem);
  & img {
    position: absolute;
    bottom: -20%;
    left: 0;
    right: 0;
    width: 130%;
  }
  @media screen and (max-width: 1023px) {
    height: min(60vw, 21rem);
    width: min(80vw, 28rem);
    & img {
      bottom: -15%;
    }
  }
  @media screen and (min-width: 1024px) {
    order: 2;
    height: 15rem;
    width: 20rem;
  }
`

const Wrapper = styled.div`
  margin: auto;
  width: min(100%, 60ch);
  & nav {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    & button {
      padding: 0.5rem;
      border-radius: 25px;
      cursor: pointer;
    }
  }
  & p {
    margin: 1rem 0;
  }
  @media screen and (max-width: 1023px) {
    & nav button {
      margin-top: 1rem;
      margin-right: 0.5rem;
    }
  }
  @media screen and (min-width: 1024px) {
    & nav button {
      margin: 1rem 1rem 1rem 0;
    }
  }
`

const Button = styled.button`
  display: block;
  cursor: pointer;
  width: min(50vw, 7rem);
  height: min(20vw, 2.7rem);
  border: none;
  background: ${brown};
  color: ${black};
  border-radius: 25px;
  margin: 1rem 0;
  font-size: 1.2rem;
  & :hover,
  & :focus {
    background: darken(${brown}, 10%);
  }
`
