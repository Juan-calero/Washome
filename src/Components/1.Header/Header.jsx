import React, { useState } from "react"
import {
  header,
  logo,
  menu,
  burger,
  nav,
  bg,
  list,
  deskNav,
  deskList,
} from "./header.module.scss"
import "../../main.scss"
import WashomeLogo from "../../img/washomeLogoHeader.png"

function Header() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false)

  return (
    <header className={header}>
      <img
        className={logo}
        src={WashomeLogo}
        alt='Logotipo Washome Preto - Limpeza Têxtil Profissional'
      />
      <svg
        onClick={() => setIsBurgerOpen(!isBurgerOpen)}
        className={burger}
        id='burger'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='xMidYMid meet'
        viewBox='0 0 24 24'>
        <path d='M6 7h5a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2zm7 8h5a1 1 0 0 1 0 2h-5a1 1 0 1 1 0-2zm-7-4h12a1 1 0 0 1 0 2H6a1 1 0 1 1 0-2z' />
      </svg>
      {isBurgerOpen && (
        <div className={menu}>
          <nav className={nav}>
            <svg
              onClick={() => setIsBurgerOpen(!isBurgerOpen)}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'>
              <path d='M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10L4.293 5.707a1 1 0 0 1 0-1.414z' />
            </svg>
            <ul className={list}>
              <li>
                <a href='#servico'>Serviços</a>
              </li>
              <li>
                <a href='#sobre'>Sobre</a>
              </li>
              <li>
                <a href='#testemunhos'>Testemunhos</a>
              </li>
              <a href='#contato' className='btn__blue'>
                Fale Connosco
              </a>
            </ul>
          </nav>
        </div>
      )}
      <nav className={deskNav}>
        <ul className={deskList}>
          <li>
            <a href='#servico'>Serviços</a>
          </li>
          <li>
            <a href='#sobre'>Sobre</a>
          </li>
          <li>
            <a href='#testemunhos'>Testemunhos</a>
          </li>
          <a href='#contato' className='btn__blue'>
            Fale Connosco
          </a>
        </ul>
      </nav>
    </header>
  )
}

export default Header
