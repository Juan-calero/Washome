import React from "react"
import FoldBg from "../../img/carpet-cleaning.png"
import styled from "styled-components"
import {
  white,
  ZIndexMiddle,
  ZIndexBackground,
  SizeM,
  SizeS,
  lightBlue,
} from "../Utils/tokens"
import { ContactForm } from "../6.Contatos/contact-form"
import { useIsSmallScreen } from "../Utils/useIsSmallScreen"
import { LayoutWrapper } from "../Utils/LayoutWrapper"

export const ServicesBanner = () => {
  return (
    <LayoutWrapper>
      <StyledFold></StyledFold>
    </LayoutWrapper>
  )
}

const ContactFormWrapper = styled.div`
  width: ${SizeM};
  background: white;
`

const StyledFold = styled.section`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: ${lightBlue};
  height: ${SizeS};
  position: relative;
  z-index: ${ZIndexBackground};
`
const StyledCopy = styled.div`
  font-weight: 900;
`

const Subline = styled.h3`
  font-size: min(6vw, 1.7rem);
  color: ${white};
  margin: 0;
`
