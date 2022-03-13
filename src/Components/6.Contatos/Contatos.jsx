import React from "react"
import styled from "styled-components"

import BigBubble from "../../img/Bluebubble.png"
import SmallBubble from "../../img/Brownbubble.png"
import { ContactForm } from "./contact-form"
import { ContactUsAt } from "./contact-us-at"
import { ContatosHeader } from "./contatos-header"

export const Contatos = () => (
  <StyledContato id='contato'>
    <BlueBubble loading='lazy' src={BigBubble} alt='' />
    <BrownBubble loading='lazy' src={SmallBubble} alt='' />
    <ContatosHeader />
    <ContactForm />
  </StyledContato>
)

const StyledContato = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  text-align: center;
  min-height: 80vh;
  overflow: hidden;
`

const BlueBubble = styled.img`
  position: absolute;
  bottom: -10%;
  @media screen and (max-width: 1023px) {
    right: min(-5%, 60rem);
    width: min(54vw, 20rem);
  }
  @media screen and (min-width: 1024px) {
    right: min(10%, 60rem);
    width: min(54vw, 20rem);
  }
`

const BrownBubble = styled.img`
  position: absolute;
  @media screen and (max-width: 1023px) {
    display: none;
    top: 7%;
    left: min(-5%, 60rem);
    width: min(18vw, 9rem);
  }
  @media screen and (min-width: 1024px) {
    top: 2%;
    left: min(10%, 60rem);
    width: min(18vw, 9rem);
  }
`
