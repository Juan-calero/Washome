import React from "react"
import FoldBg from "../../img/carpet-cleaning.png"
import styled from "styled-components"
import {
  white,
  ZIndexMiddle,
  ZIndexBackground,
  SizeM,
  SpaceL,
  SizeXS,
  SpaceXS,
  SpaceM,
} from "../Utils/tokens"
import { ContactForm } from "../6.Contatos/contact-form"
import { LayoutWrapper } from "../Utils/LayoutWrapper"
import { ServicesBanner } from "./services-banner"

export const Fold = () => (
  <React.Fragment>
    <LayoutWrapper>
      <StyledFold>
        <StyledCopy>
          <h1>LIMPEZA AO DOMICILIO COMO NUNCA A VIU</h1>
          <h3>Carpetes. Sofás. Colchões.</h3>
        </StyledCopy>
        <ContactFormWrapper children={<ContactForm />} />
      </StyledFold>
    </LayoutWrapper>
    <ServicesBanner />
  </React.Fragment>
)

const StyledFold = styled.section`
  margin: auto;
  padding: ${SizeXS} ${SpaceL};
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  background: url(${FoldBg}) left bottom/cover no-repeat;
  min-height: 700px;
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
const StyledCopy = styled.span`
  font-weight: 900;
  color: ${white};
`

const ContactFormWrapper = styled.div`
  width: ${SizeM};
  border-radius: ${SpaceXS};
  padding: ${SpaceM};
  background: white;
`
