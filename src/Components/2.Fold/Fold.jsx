import React from "react"
import { bigbubble, smallbubble, fold, text } from "./fold.module.scss"
import BigBubble from "../../img/Bluebubble.webp"
import SmallBubble from "../../img/Brownbubble.webp"

function Fold() {
  return (
    <section className={fold}>
      <div className={text}>
        <h1>LIMPEZA TÊXTIL</h1>
        <h2>Carpetes. Sofás. Colchões.</h2>
      </div>
      <img loading='eager' className={bigbubble} src={BigBubble} alt='' />
      <img loading='eager' className={smallbubble} src={SmallBubble} alt='' />
      <a aria-label='Ver Servicos Disponíveis' href='#servico' tabIndex='-1'>
        <svg
          tabIndex='0'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'>
          <path d='M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 14.414l-5.707-5.707l1.414-1.414L12 13.586l4.293-4.293l1.414 1.414L12 16.414z' />
        </svg>
      </a>
    </section>
  )
}

export default Fold
