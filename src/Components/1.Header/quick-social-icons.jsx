import React from "react"
import styled from "styled-components"
import { Icon } from "@iconify/react"

import { SpaceS, SpaceM } from "../Utils/tokens"

const QUICKSOCIALICONS = [
  {
    href: "https://www.facebook.com/washomelimpezaconforto.washome",
    icon: "brandico:facebook-rect",
  },
  {
    href: "https://www.instagram.com/washome_limpezas/",
    icon: "brandico:instagram-filled",
  },
  {
    href: "https://wa.me/351927264565",
    icon: "cib:whatsapp",
  },
]

export const QuickSocialIcons = () => (
  <StyledQuickContact>
    {QUICKSOCIALICONS.map(({ href, icon }) => (
      <Item {...{ href, key: href }} rel='noreferrer noopener' target='_blank'>
        <Icon {...{ icon }} width={SpaceM} height={SpaceM} />
      </Item>
    ))}
  </StyledQuickContact>
)

const StyledQuickContact = styled.div`
  display: flex;
`

const Item = styled.a`
  display: flex;
  margin: 0 ${SpaceS};
`
