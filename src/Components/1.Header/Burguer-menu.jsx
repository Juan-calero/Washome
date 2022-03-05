import * as React from "react"
import { black } from "../Utils/tokens"

import styled from "styled-components"
import "../../main.scss"

export const BurguerMenu = () => {
  const [isBurgerOpen, setIsBurgerOpen] = React.useState(false)

  return (
    <React.Fragment>
      <Burguer
        onClick={() => setIsBurgerOpen(!isBurgerOpen)}
        id='burger'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='xMidYMid meet'
        viewBox='0 0 24 24'
        children={
          <path d='M6 7h5a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2zm7 8h5a1 1 0 0 1 0 2h-5a1 1 0 1 1 0-2zm-7-4h12a1 1 0 0 1 0 2H6a1 1 0 1 1 0-2z' />
        }
      />
      {isBurgerOpen && (
        <MenuModal>
          <MenuNav>
            <svg
              onClick={() => setIsBurgerOpen(!isBurgerOpen)}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'>
              <path d='M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10L4.293 5.707a1 1 0 0 1 0-1.414z' />
            </svg>
            <List>
              <li children={<a href='#servico'>Serviços</a>} />
              <li children={<a href='#sobre'>Sobre</a>} />
              <li children={<a href='#testemunhos'>Testemunhos</a>} />
              <a
                href='#contato'
                className='btn__blue'
                children='Fale Connosco'
              />
            </List>
          </MenuNav>
        </MenuModal>
      )}
    </React.Fragment>
  )
}

const Burguer = styled.svg`
  cursor: pointer;
  fill: black;
  height: 100%;
  width: auto;
`

const MenuModal = styled.div`
  z-index: 4;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  display: flex;
  &::before {
    content: "";
    background: $black;
    z-index: -1;
    opacity: 0.3;
    width: 100vw;
    height: 100vh;
  }
`
const MenuNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  background: ${black};
  right: 0;
  width: 60%;
  height: 100%;
  z-index: 1;
  & svg {
    position: absolute;
    top: 0.2rem;
    right: 0.2rem;
    width: 3.5rem;
  }
  & li {
    font-size: min(4vw, 1.5rem);
  }
`
const List = styled.ul`
  margin: auto;
  padding: 0;
  font-size: 1.25rem;
  & li {
    margin-bottom: max(3vh, 1.5rem);
  }
`
