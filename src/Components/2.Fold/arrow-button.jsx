import React from "react"
import styled from "styled-components"
import { blue } from "../Utils/tokens"

export const ArrowButton = () => (
  <a href='#servico'>
    <ArrowIcon xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
      <path d='M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 14.414l-5.707-5.707l1.414-1.414L12 13.586l4.293-4.293l1.414 1.414L12 16.414z' />
    </ArrowIcon>
  </a>
)

const ArrowIcon = styled.svg`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  margin: auto;
  transition: all 0.1s;
  fill: ${blue};

  @media screen and (max-width: 1023px) {
    width: 3rem;
  }

  @media screen and (min-width: 1024px) {
    width: 2.5rem;
    &:hover,
    &:focus {
      box-sizing: content-box;
      border-radius: 25px;
      padding: 5px;
      border: 2px solid ${blue};
      width: calc(min(6%, 1.6rem) + 5px);
    }
  }
`
