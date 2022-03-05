import React from "react"
import styled, { css } from "styled-components"
import { black, lightBlue, blue, white } from "../Utils/tokens"
import { SERVICOS } from "./Servicos"

export const ServicoButton = ({ type, service, setService }) => (
  <StyledButton
    $type={type}
    $service={service}
    onClick={() => setService(type)}
    children={SERVICOS[type].title}
  />
)

const StyledButton = styled.button`
  ${({ $type, $service }) =>
    $service === $type
      ? css`
          color: ${white};
          border: 1px solid ${blue};
          background: ${blue};
        `
      : css`
          border: 1px solid ${black};
          background: transparent;
          color: ${black};
          &:hover,
          &:focus {
            border-color: ${lightBlue};
            color: ${lightBlue};
          }
        `}
`
