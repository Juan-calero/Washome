import React from "react"
import styled from "styled-components"
import {
  white,
  ZIndexBackground,
  SizeM,
  SizeXS,
  lightBlue,
  SizeXL_S,
  SpaceM,
  SpaceXL,
  SpaceL,
  SpaceXS,
} from "../Utils/tokens"
import { LayoutWrapper } from "../Utils/LayoutWrapper"
import { Icon } from "@iconify/react"

const CONTACTUSAT = [
  {
    text: "ÁCAROS E FUNGOS",
    icon: "ant-design:bug-filled",
  },
  {
    text: "MANCHAS E SUJIDADE​",
    icon: "mdi:liquid-spot",
  },
  {
    text: "IMPERMEABILIZAÇÃO",
    icon: "ic:baseline-water-drop",
  },
  {
    text: "MAUS ODORES",
    icon: "carbon:face-dizzy-filled",
  },
  {
    text: "PELOS DE ANIMAL",
    icon: "fluent:animal-dog-24-filled",
  },
]

export const ServicesBanner = () => {
  return (
    <LayoutWrapper width={SizeXL_S}>
      <StyledFold>
        {CONTACTUSAT.map(({ text, icon }, key) => (
          <Item {...{ key }}>
            <Icon {...{ icon }} width={SpaceXL} height={SpaceXL} />
            <StyledText {...{ children: text }} />
          </Item>
        ))}
      </StyledFold>
    </LayoutWrapper>
  )
}

const StyledFold = styled.section`
  width: 100%;
  border-radius: ${SpaceM};
  margin: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: ${lightBlue};
`

const Item = styled.div`
  margin: ${SpaceM} ${SpaceL};
  color: ${white};
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledText = styled.p`
  margin-top: ${SpaceXS};
`
