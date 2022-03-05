import React from "react"
import styled from "styled-components"
import { lightBlue, blue } from "../Utils/tokens"

export const ContatosHeader = () => (
  <StyledHeader>
    <h2>Peça já o seu orçamento</h2>
    <p className='fw-500'>GRATUITO E IMEDIATO</p>
    <p>Segunda a Sábado: 09h - 13h | 14h - 22h</p>
  </StyledHeader>
)

const StyledHeader = styled.div`
  position: relative;
  z-index: 1;
  color: ${lightBlue};
  & p {
    margin-top: 1rem;
    color: ${blue};
  }
`
