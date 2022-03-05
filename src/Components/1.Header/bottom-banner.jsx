import React from "react"
import styled from "styled-components"
import WashomeLogo from "../../img/washomeLogoHeader.png"
import { DesktopHeader } from "./Desktop-header"
import { BurguerMenu } from "./Burguer-menu"
import { SizeXL, SpaceM } from "../Utils/tokens"

export const BottomBanner = ({ isSmallScreen }) => (
  <StyledBottomBanner>
    <Logo
      src={WashomeLogo}
      alt='Logotipo Washome Preto - Limpeza Têxtil Profissional'
    />
    {isSmallScreen ? <BurguerMenu /> : <DesktopHeader />}
  </StyledBottomBanner>
)

const Logo = styled.img`
  filter: brightness(0%);
  width: 10rem;
`

const StyledBottomBanner = styled.div`
  align-self: center;
  z-index: 4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 0.1rem;
  height: 4rem;
  width: min(100%, ${SizeXL});
  padding: 0 ${SpaceM};
`
