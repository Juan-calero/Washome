import * as React from "react"
import styled from "styled-components"
import { lightestGrey, blue } from "../Utils/tokens"

import Portugalia from "../../img/LogoPortugalia.png"
import Prime from "../../img/LogoPrime.png"
import Segundo from "../../img/LogoSegundo.png"
import Forever from "../../img/LogoForever.png"

export const Empresas = () => (
  <StyledEmpresas>
    <h3>Clientes satisfeitos com os nossos serviços</h3>
    <img loading='lazy' src={Portugalia} alt='Logotipo Portugália' />
    <img
      loading='lazy'
      src={Prime}
      alt='Logotipo Prime School - International School'
    />
    <img loading='lazy' src={Forever} alt='Logotipo Forever' />
    <img loading='lazy' src={Segundo} alt='Logotipo Segundo Muelle' />
  </StyledEmpresas>
)

const StyledEmpresas = styled.div`
  background: ${lightestGrey};
  text-align: center;
  width: 100%;
  color: ${blue};
  & > h3 {
    width: 100%;
    margin: auto;
  }
  & img {
    margin: 1rem;
    display: inline;
    width: 8rem;
  }
  @media screen and (max-width: 1023px) {
    padding: 2rem;
  }
  @media screen and (min-width: 1024px) {
    padding: 2rem 10%;
    & > h3 {
      width: 70ch;
    }
    & img {
      margin: 1rem 2vw;
    }
  }
`
