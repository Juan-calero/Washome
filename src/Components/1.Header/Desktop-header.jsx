import * as React from "react"
import styled from "styled-components"
import { lightBlue } from "../Utils/tokens"
import "../../main.scss"

export const DesktopHeader = () => (
  <DesktopWrapper>
    <DesktopList>
      <li children={<a href='#servico'>Serviços</a>} />
      <li children={<a href='#sobre'>Sobre</a>} />
      <li children={<a href='#testemunhos'>Testemunhos</a>} />
      <a href='#contato' className='btn__blue'>
        Fale Connosco
      </a>
    </DesktopList>
  </DesktopWrapper>
)

const DesktopWrapper = styled.div`
  @media screen and (max-width: 1023px) {
    display: none;
  }
`

const DesktopList = styled.ul`
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    & li a {
      font-size: 1rem;
      color: ${lightBlue};
      &:hover,
      &:focus {
        border-bottom: 2px solid ${lightBlue};
      }
    }
    & li {
      margin-right: 2vw;
    }
  }
`
