import React from "react"
import styled from "styled-components"
import { Icon } from "@iconify/react"
import { blue, SpaceXS, SizeXS } from "../Utils/tokens"

const CONTACTUSAT = [
  {
    text: "927 264 565",
    href: "tel:+351927264565",
    icon: "ant-design:phone-filled",
  },
  {
    text: "Whatsapp",
    href: "https://wa.me/351927264565",
    icon: "cib:whatsapp",
  },
]

export const ContactUsAt = () => (
  <StyledContactUsAt>
    ou fale connosco em:
    <StyledContacts>
      {CONTACTUSAT.map(({ text, href, icon }, key) => (
        <Info {...{ key, href }}>
          <Icon {...{ icon }} />
          <StyledText {...{ children: text }} />
        </Info>
      ))}
    </StyledContacts>
  </StyledContactUsAt>
)
const StyledContactUsAt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Info = styled.a`
  min-width: ${SizeXS};
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${SpaceXS};
  background-color: ${blue};
  border-radius: ${SpaceXS};
`

const StyledText = styled.p`
  margin-left: ${SpaceXS};
`

const StyledContacts = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`
