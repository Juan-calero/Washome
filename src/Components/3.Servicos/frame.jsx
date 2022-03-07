import React from "react"
import styled from "styled-components"
import { css } from "styled-components"
import { black, blue, lightBlue } from "../Utils/tokens"

export const Frame = ({ isSmallScreen, src, alt, className }) => {
  console.log(isSmallScreen)
  return (
    <StyledFrame {...{ className, isSmallScreen }}>
      <img {...{ src, alt }} loading='lazy' />
    </StyledFrame>
  )
}

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
  ${({ isSmallScreen }) =>
    isSmallScreen
      ? css`
          height: min(60vw, 21rem);
          width: min(80vw, 28rem);
          & img {
            bottom: -15%;
          }
        `
      : css`
          order: 2;
          height: 15rem;
          width: 20rem;
        `}
`
