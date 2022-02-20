import React from "react"
import Cleaner from "../../img/Cleaner.png"
import styled from "styled-components"
import { SobreBox } from "./Sobre-box"
import { Extrator } from "./extrator"

export const Sobre = () => (
  <StyledSobre id='sobre'>
    <Extrator />
    <SobreBox />
    <StyledCleaner
      loading='lazy'
      src={Cleaner}
      alt='Lavadora de Carpetes Washome'
    />
  </StyledSobre>
)

const StyledCleaner = styled.img`
  @media screen and (max-width: 749px) {
    display: none;
  }
  @media screen and (min-width: 750px) {
    z-index: 3;
    position: absolute;
    bottom: 2rem;
    right: 0;
    width: clamp(8rem, 30%, 17rem);
  }
  @media screen and (min-width: 1024px) {
    right: 8%;
  }
`

const StyledSobre = styled.section`
  overflow: hidden;
  min-height: 70vh;
  position: relative;
  background-size: cover;
  padding: max(43vw, 15rem) 0 20%;
  @media screen and (min-width: 1024px) {
    padding-top: min(40rem, 70vw);
  }
`
