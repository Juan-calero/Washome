import React from "react"
import FoldBg from "../../img/carpet-cleaning.png"
import styled from "styled-components"
import { white, ZIndexMiddle, ZIndexBackground, SizeM } from "../Utils/tokens"
import { ContactForm } from "../6.Contatos/contact-form"
import { useIsSmallScreen } from "../Utils/useIsSmallScreen"
import { LayoutWrapper } from "../Utils/LayoutWrapper"

export const Fold = () => {
  const { isSmallScreen } = useIsSmallScreen()

  return (
    <LayoutWrapper>
      <StyledFold>
        <StyledCopy>
          <h1>LIMPEZA TÊXTIL</h1>
          <Subline>Carpetes. Sofás. Colchões.</Subline>
        </StyledCopy>
        <ContactFormWrapper>
          {!isSmallScreen && <ContactForm />}
        </ContactFormWrapper>
      </StyledFold>
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

  background: url(${FoldBg}) left bottom/cover no-repeat;
  height: 700px;
  position: relative;
  z-index: ${ZIndexBackground};
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.99);
    opacity: 0.6;
  }
  & * {
    z-index: ${ZIndexMiddle};
  }
`
const StyledCopy = styled.div`
  font-weight: 900;
`

const Subline = styled.h3`
  font-size: min(6vw, 1.7rem);
  color: ${white};
  margin: 0;
`
