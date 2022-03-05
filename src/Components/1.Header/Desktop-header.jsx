import * as React from "react"
import styled from "styled-components"
import { lightBlue } from "../Utils/tokens"
import "../../main.scss"
import { Link } from "react-router-dom"

export const DesktopHeader = () => (
  <DesktopList>
    <li children={<Link to='/servicos'>Serviços</Link>} />
    <li children={<a href='#sobre'>Sobre</a>} />
    <li children={<a href='#testemunhos'>Testemunhos</a>} />
    <a href='#contato' className='btn__blue'>
      Fale Connosco
    </a>
  </DesktopList>
)

const DesktopList = styled.ul`
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
`
