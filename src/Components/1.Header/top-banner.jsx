import React from "react"
import styled from "styled-components"

import { lightBlue, SpaceXL, SizeXL } from "../Utils/tokens"
import { useIsSmallScreen } from "../Utils/useIsSmallScreen"
import { QuickContact } from "./quick-contact"
import { QuickSocialIcons } from "./quick-social-icons"

export const TopBanner = () => {
  const { isSmallScreen } = useIsSmallScreen()

  return (
    <StyledTopBanner>
      <Wrapper>
        <QuickContact {...{ isSmallScreen }} />
        <QuickSocialIcons size='small' />
      </Wrapper>
    </StyledTopBanner>
  )
}

const StyledTopBanner = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${SpaceXL};
  background: ${lightBlue};
`

const Wrapper = styled.div`
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: min(100%, ${SizeXL});
`
