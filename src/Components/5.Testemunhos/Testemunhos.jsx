import React, { useEffect, useState } from "react"
import { line, active2 } from "./testemunhos.module.scss"
import { Empresas } from "./empresas"
import { testemunhosArr } from "../Utils/Arrays"
import { Carousel } from "./Carousel"
import styled from "styled-components"
import { lightestGrey, white } from "../Utils/tokens"
import { MyBusinessIcon } from "./my-business-icon"

export const Testemunhos = () => {
  const [testemunho, setTestemunho] = useState(0)

  //REFACTOR THIS
  useEffect(() => {
    const slideInterval = setInterval(
      () => setTestemunho((prevState) => (prevState + 1) % 4),
      6000
    )
    return () => clearInterval(slideInterval)
  }, [])

  return (
    <StyledTestemunhos id='testemunhos'>
      <Carousel {...{ testemunho }} />
      <StyledCardNavigator>
        {testemunhosArr.map((_, index) => (
          <button
            key={index}
            onClick={() => setTestemunho(index)}
            className={`${index === testemunho ? active2 : ""} ${line}`}
          />
        ))}
      </StyledCardNavigator>
      <MyBusinessIcon />

      <Empresas />
    </StyledTestemunhos>
  )
}

const StyledTestemunhos = styled.section`
  background: ${lightestGrey};
  color: ${white};
  padding-top: 15vh;
  position: relative;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 1024px) {
    padding-top: 10vh;
  }
`

const StyledCardNavigator = styled.nav`
  margin: 10%;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 1024px) {
    margin: 2% 10%;
  }
`
