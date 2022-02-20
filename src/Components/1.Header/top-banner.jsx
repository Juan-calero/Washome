import React from "react"
import styled from "styled-components"
import { SocialIcons } from "../common/social-icons"
import { lightBlue } from "../Utils/tokens"

export const TopBanner = () => (
  <StyledTopBanner>
    <SocialIcons size='small' />
  </StyledTopBanner>
)

const StyledTopBanner = styled.header`
  display: flex;
  height: 32px;
  background: ${lightBlue};
`
