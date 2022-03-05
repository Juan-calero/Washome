import React from "react"
import styled from "styled-components"
import { TopBanner } from "./top-banner"
import { useIsSmallScreen } from "../Utils/useIsSmallScreen"
import { BottomBanner } from "./bottom-banner"
import { petrol } from "../Utils/tokens"

export const Header = () => {
  const { isSmallScreen } = useIsSmallScreen()

  return (
    <StyledHeader>
      <TopBanner {...{ isSmallScreen }} />
      <BottomBanner {...{ isSmallScreen }} />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 4;
  display: flex;
  flex-direction: column;
  background: white;
  box-shadow: 0px 0px 15px ${petrol};
`
