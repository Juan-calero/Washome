import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { black, lightBlue, blue, brown, SizeXXL } from "../Utils/tokens"
import Colchão from "../../img/ServicosMatress.png"
import Sofa from "../../img/ServicosCouch.png"
import Carpete from "../../img/ServicosCarpet.png"
import { ServicoButton } from "./servico-button"
import { useIsSmallScreen } from "../Utils/useIsSmallScreen"
import { LayoutWrapper } from "../Utils/LayoutWrapper"
import { Frame } from "./frame"
import { css } from "styled-components"

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
  const { isSmallScreen } = useIsSmallScreen()

  return (
    <LayoutWrapper width={SizeXXL}>
      <StyledServicos {...{ isSmallScreen }} id='servico'>
        <Frame
          {...{ isSmallScreen }}
          src={SERVICOS[service].image.src}
          alt={SERVICOS[service].image.alt}
        />
        <Wrapper {...{ isSmallScreen }}>
          <h2 children={"SERVIÇOS"} />
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
    </LayoutWrapper>
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
  ${({ isSmallScreen }) =>
    isSmallScreen &&
    css`
      flex-direction: column;
      justify-content: space-between;
    `}
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

  ${({ isSmallScreen }) =>
    isSmallScreen
      ? css`
          & nav button {
            margin-top: 1rem;
            margin-right: 0.5rem;
          }
        `
      : css`
          & nav button {
            margin: 1rem 1rem 1rem 0;
          }
        `}
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
