import React, { useState } from "react"
import {
  servicos,
  wrapper,
  frame,
  btn,
  activeImg,
  notactiveImg,
  active,
  unactive,
  upperTitle,
  lowerTitle,
} from "./servicos.module.scss"
import { images, SERVICOS } from "../Utils/Arrays"
import { Link } from "react-router-dom"

function Servicos() {
  const [service, setService] = useState(0)

  const imgMap = images.map(({ alt, src }, index) => {
    return (
      <img
        key={index}
        src={src}
        alt={alt}
        className={service === index ? activeImg : notactiveImg}
        loading='lazy'
      />
    )
  })

  return (
    <section className={servicos} id='servico'>
      <h2 className={upperTitle}>SERVIÇOS</h2>
      <div className={frame}>{imgMap}</div>
      <div className={wrapper}>
        <h2 className={lowerTitle}>SERVIÇOS</h2>
        <nav>
          <button
            className={!service ? active : unactive}
            onClick={() => {
              setService(0)
            }}>
            Colchões
          </button>
          <button
            className={service === 1 ? active : unactive}
            onClick={() => setService(1)}>
            Sofás {"&"} Maples
          </button>
          <button
            className={service === 2 ? active : unactive}
            onClick={() => setService(2)}>
            Carpetes {"&"} Tapeçarias
          </button>
        </nav>
        <p>{SERVICOS[service]}</p>
        <button className={btn}>
          <Link to='/servicos'>Ler mais</Link>
        </button>
      </div>
    </section>
  )
}

export default Servicos
