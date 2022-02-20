import React from "react"
import styled from "styled-components"
import WashomeLogo from "../../img/washomeLogoHeader.png"
import { DesktopHeader } from "./Desktop-header"
import { BurguerMenu } from "./Burguer-menu"
import { TopBanner } from "./top-banner"

export const Header = () => (
  <StyledHeader>
    <TopBanner />
    <HeaderWrapper>
      <Logo
        src={WashomeLogo}
        alt='Logotipo Washome Preto - Limpeza Têxtil Profissional'
      />
      <BurguerMenu />
      <DesktopHeader />
    </HeaderWrapper>
  </StyledHeader>
)

const Logo = styled.img`
  filter: brightness(0%);
  width: 10rem;
`

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 4;
  display: flex;
  flex-direction: column;
  background: white;
`
const HeaderWrapper = styled.div`
  z-index: 4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 0.1rem;

  @media screen and (max-width: 1023px) {
    min-height: 3.7rem;
    height: min(15vw, 15vh);
    max-height: 4rem;
    width: 100%;
    padding-left: 0.5rem;
  }

  @media screen and (min-width: 1024px) {
    height: 5rem;
    width: min(90%, 70rem);
    padding-left: 1rem;
    margin: 0 auto;
  }
`
