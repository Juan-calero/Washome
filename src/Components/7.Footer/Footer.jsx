import React from "react"
import Logo from "../../img/washomeLogoWhite.png"
import styled from "styled-components"
import { lightBlue } from "../Utils/tokens"
import { SocialIcons } from "../common/social-icons"

export const Footer = () => (
  <StyledFooter>
    <StyledLogo
      loading='lazy'
      src={Logo}
      alt='Logotipo Washome - Limpeza Têxtil Profissional'
    />
    <SocialIcons />
    <p>Washome® 2021 | Todos os Direitos Reservados</p>
  </StyledFooter>
)

const StyledLogo = styled.img`
  @media screen and (max-width: 1023px) {
    width: min(90%, 17rem);
    margin: auto;
  }

  @media screen and (min-width: 1024px) {
    height: 6rem;
  }
`

const StyledFooter = styled.footer`
  position: relative;
  z-index: 1;
  display: flex;
  background: ${lightBlue};
  color: white;
  padding: 2rem 0.5rem;
  justify-content: space-between;
  & p {
    position: absolute;
    bottom: 1rem;
    width: 90%;
    text-align: center;
    font-size: 0.7rem;
  }

  @media screen and (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 1024px) {
    padding: 2rem 0.5rem 4rem;
    align-items: center;
    justify-content: space-around;
  }
`
