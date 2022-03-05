import React, { useState } from "react"
import ExtratorImg from "../../img/Extrator.png"
import styled, { css } from "styled-components"
import { blue, white } from "../Utils/tokens"
import { useHandleScroll } from "./use-handle-scroll"

export const Extrator = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useHandleScroll(setIsScrolled)

  return (
    <React.Fragment>
      <StyledExtrator
        $isScrolled={isScrolled}
        src={ExtratorImg}
        id='extrator'
        alt=''
        loading='lazy'
      />
      <StyledWhiteTrail
        $isScrolled={isScrolled}
        children={<StyledTitle children='SOBRE A WASHOME' />}
      />
    </React.Fragment>
  )
}

const StyledTitle = styled.h2`
  margin: 20px 0;
  text-align: center;
  width: 100vw;
  font-size: min(10vw, 2rem);
  color: ${blue};
  &::before {
    position: absolute;
    content: "";
    top: 0%;
    right: 0;
    left: 0;
    bottom: 0%;
    background: ${white};
    opacity: 0.3;
    mix-blend-mode: overlay;
    width: 100%;
  }
  @media screen and (min-width: 1024px) {
    margin: 40px 0;
    width: 100vw;
    font-size: 3rem;
  }
`

const StyledExtrator = styled.img`
  ${({ $isScrolled }) =>
    $isScrolled
      ? css`
          transform: translateX(100vw);
        `
      : css`
          transform: translateX(0);
        `}
  transition: transform 1.5s ease-in-out;
  position: absolute;
  top: 19vw;
  left: 0%;
  height: 80px;
  z-index: 1;
  @media screen and (min-width: 1024px) {
    top: 20%;
    height: 15%;
  }
`

const StyledWhiteTrail = styled.div`
  ${({ $isScrolled }) =>
    $isScrolled
      ? css`
          width: 100vw;
        `
      : css`
          width: 0;
        `}
  position: absolute;
  overflow: hidden;
  height: 80px;
  transition: all 1.5s ease-in-out;
  top: 19vw;
  left: 0%;
  @media screen and (min-width: 1024px) {
    height: 15%;
    top: 20%;
  }
`
