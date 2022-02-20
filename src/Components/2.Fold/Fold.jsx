import React from "react"
import FoldBg from "../../img/carpet-cleaning.png"
import styled from "styled-components"
import { lightBlue } from "../Utils/tokens"
import { ArrowButton } from "./arrow-button"

export const Fold = () => (
  <StyledFold>
    <StyledCopy>
      <Headline>LIMPEZA TÊXTIL</Headline>
      <Subline>Carpetes. Sofás. Colchões.</Subline>
    </StyledCopy>
    <ArrowButton />
  </StyledFold>
)

const StyledFold = styled.section`
  background: url(${FoldBg});
  background-size: cover;
  min-height: max(95vh, 25rem);
  position: relative;
  display: flex;
`
const StyledCopy = styled.div`
  z-index: 1;
  font-weight: 900;
  margin: auto;
`

const Headline = styled.h1``

const Subline = styled.h3`
  font-size: min(6vw, 1.7rem);
  color: ${lightBlue};
  margin: 0;
`
