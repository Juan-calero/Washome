import React from "react"
import { Empresas } from "./empresas"
import { testemunhosArr } from "../Utils/Arrays"
import { Carousel } from "./Carousel"
import styled, { css } from "styled-components"
import { lightestGrey, white, blue } from "../Utils/tokens"
import { MyBusinessIcon } from "./my-business-icon"

export const Testemunhos = () => {
  const [testemunho, setTestemunho] = React.useState(0)

  //REFACTOR THIS
  React.useEffect(() => {
    const slideInterval = setInterval(
      () => setTestemunho((prevState) => (prevState + 1) % 4),
      6000
    )
    return () => clearInterval(slideInterval)
  }, [])

  return (
    <StyledTestemunhos id='testemunhos'>
      <Empresas />
      <Carousel {...{ testemunho }} />
      <StyledCardNavigator>
        {testemunhosArr.map((_, index) => (
          <StyledTestemunhosButton
            $isActive={index === testemunho}
            key={index}
            onClick={() => setTestemunho(index)}
          />
        ))}
      </StyledCardNavigator>
      <MyBusinessIcon />
    </StyledTestemunhos>
  )
}

const StyledTestemunhos = styled.section`
  background: ${lightestGrey};
  color: ${white};
  position: relative;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const StyledCardNavigator = styled.nav`
  margin: 10%;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 1024px) {
    margin: 2% 10%;
  }
`

const StyledTestemunhosButton = styled.button`
  ${({ $isActive }) =>
    $isActive
      ? css`
          width: 4rem;
          &::after {
            height: 0.4rem;
            background: ${blue};
          }
        `
      : css`
          width: 3rem;
          &::after {
            height: 0.25rem;
            background: ${white};
          }
        `}

  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;
  height: 3rem;
  margin: 0.2rem;
  transition: all 0.2s ease;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    margin: auto;
    pointer-events: none;
  }
  &:hover,
  &:focus {
    width: 4rem;
  }
`
