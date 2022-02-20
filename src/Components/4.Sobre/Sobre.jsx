import React, { useEffect, useState } from "react"
import Extrator from "../../img/Extrator.png"
import Cleaner from "../../img/Cleaner.png"
import {
  cleaner,
  sobre,
  extrator,
  textbox,
  title,
  titletext,
  top,
  bottom,
  extrator__scrolled,
  title__scrolled,
} from "./sobre.module.scss"

function Sobre() {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () => {
    const section = document
      .getElementById("extrator")
      .getBoundingClientRect().y
    setIsScrolled(section < 400)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <section className={sobre} id='sobre'>
      <img
        loading='lazy'
        className={`${isScrolled ? extrator__scrolled : ""} ${extrator}`}
        src={Extrator}
        id='extrator'
        alt=''
      />
      <div className={`${isScrolled ? title__scrolled : ""} ${title}`}>
        <h2 className={titletext}>SOBRE A WASHOME</h2>
      </div>
      <div className={textbox}>
        <svg
          className={top}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'>
          <path d='M208 512a24.84 24.84 0 0 1-23.34-16l-39.84-103.6a16.06 16.06 0 0 0-9.19-9.19L32 343.34a25 25 0 0 1 0-46.68l103.6-39.84a16.06 16.06 0 0 0 9.19-9.19L184.66 144a25 25 0 0 1 46.68 0l39.84 103.6a16.06 16.06 0 0 0 9.19 9.19l103 39.63a25.49 25.49 0 0 1 16.63 24.1a24.82 24.82 0 0 1-16 22.82l-103.6 39.84a16.06 16.06 0 0 0-9.19 9.19L231.34 496A24.84 24.84 0 0 1 208 512zm66.85-254.84z' />
          <path d='M88 176a14.67 14.67 0 0 1-13.69-9.4l-16.86-43.84a7.28 7.28 0 0 0-4.21-4.21L9.4 101.69a14.67 14.67 0 0 1 0-27.38l43.84-16.86a7.31 7.31 0 0 0 4.21-4.21L74.16 9.79A15 15 0 0 1 86.23.11a14.67 14.67 0 0 1 15.46 9.29l16.86 43.84a7.31 7.31 0 0 0 4.21 4.21l43.84 16.86a14.67 14.67 0 0 1 0 27.38l-43.84 16.86a7.28 7.28 0 0 0-4.21 4.21l-16.86 43.84A14.67 14.67 0 0 1 88 176z' />
          <path d='M400 256a16 16 0 0 1-14.93-10.26l-22.84-59.37a8 8 0 0 0-4.6-4.6l-59.37-22.84a16 16 0 0 1 0-29.86l59.37-22.84a8 8 0 0 0 4.6-4.6l22.67-58.95a16.45 16.45 0 0 1 13.17-10.57a16 16 0 0 1 16.86 10.15l22.84 59.37a8 8 0 0 0 4.6 4.6l59.37 22.84a16 16 0 0 1 0 29.86l-59.37 22.84a8 8 0 0 0-4.6 4.6l-22.84 59.37A16 16 0 0 1 400 256z' />
        </svg>
        <p>
          No mercado desde 2010, a WASHOME aposta no rigor de qualidade visando
          os melhores resultados nos seus serviços e a plena satisfação e
          fidelização dos seus clientes.
        </p>
        <hr />
        <p>
          Com equipamento e higienizantes profissionais conferimos aos têxteis
          excelentes resultados de revitalização na textura e na cor.
        </p>
        <hr />
        <p>
          Promovemos empatia com todos os nossos clientes, atenção ao detalhe e
          dedicação pós-serviço, sendo estes itens a principal razão do nosso
          sucesso.
        </p>
        <svg
          className={bottom}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'>
          <path d='M208 512a24.84 24.84 0 0 1-23.34-16l-39.84-103.6a16.06 16.06 0 0 0-9.19-9.19L32 343.34a25 25 0 0 1 0-46.68l103.6-39.84a16.06 16.06 0 0 0 9.19-9.19L184.66 144a25 25 0 0 1 46.68 0l39.84 103.6a16.06 16.06 0 0 0 9.19 9.19l103 39.63a25.49 25.49 0 0 1 16.63 24.1a24.82 24.82 0 0 1-16 22.82l-103.6 39.84a16.06 16.06 0 0 0-9.19 9.19L231.34 496A24.84 24.84 0 0 1 208 512zm66.85-254.84z' />
          <path d='M88 176a14.67 14.67 0 0 1-13.69-9.4l-16.86-43.84a7.28 7.28 0 0 0-4.21-4.21L9.4 101.69a14.67 14.67 0 0 1 0-27.38l43.84-16.86a7.31 7.31 0 0 0 4.21-4.21L74.16 9.79A15 15 0 0 1 86.23.11a14.67 14.67 0 0 1 15.46 9.29l16.86 43.84a7.31 7.31 0 0 0 4.21 4.21l43.84 16.86a14.67 14.67 0 0 1 0 27.38l-43.84 16.86a7.28 7.28 0 0 0-4.21 4.21l-16.86 43.84A14.67 14.67 0 0 1 88 176z' />
          <path d='M400 256a16 16 0 0 1-14.93-10.26l-22.84-59.37a8 8 0 0 0-4.6-4.6l-59.37-22.84a16 16 0 0 1 0-29.86l59.37-22.84a8 8 0 0 0 4.6-4.6l22.67-58.95a16.45 16.45 0 0 1 13.17-10.57a16 16 0 0 1 16.86 10.15l22.84 59.37a8 8 0 0 0 4.6 4.6l59.37 22.84a16 16 0 0 1 0 29.86l-59.37 22.84a8 8 0 0 0-4.6 4.6l-22.84 59.37A16 16 0 0 1 400 256z' />
        </svg>
      </div>
      <img
        loading='lazy'
        className={cleaner}
        src={Cleaner}
        alt='Lavadora de Carpetes Washome'
      />
    </section>
  )
}

export default Sobre
