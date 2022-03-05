import React from "react"
import styled from "styled-components"
import { Icon } from "@iconify/react"

import { white, SpaceS, SpaceXS } from "../Utils/tokens"

const QUICKCONTACTS = [
  {
    text: "geral@gmail.pt",
    href: "mailto:geral@gmail.com",
    icon: "fluent:mail-16-filled",
  },
  {
    text: "927 264 565",
    href: "tel:+351927264565",
    icon: "ant-design:phone-filled",
  },
  {
    text: "Grande Lisboa e Margem Sul",
    href: null,
    icon: "carbon:location-filled",
  },
]

export const QuickContact = ({ isSmallScreen }) => (
  <StyledQuickContact>
    {QUICKCONTACTS.map(({ href, icon, text }) => (
      <Item {...{ href }}>
        <StyledIcon {...{ icon }} />
        {!isSmallScreen && <p {...{ children: text }} />}
      </Item>
    ))}
  </StyledQuickContact>
)

const StyledQuickContact = styled.div`
  display: flex;
`

const Item = styled.a`
  display: flex;
  align-items: center;
  color: ${white};
  margin: 0 ${SpaceS};
`

const StyledIcon = styled(Icon)`
  margin-right: ${SpaceXS};
`
