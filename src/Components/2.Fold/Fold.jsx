import React from "react"
import { bigbubble, smallbubble, fold, text } from "./fold.module.scss"
import BigBubble from "../../img/Bluebubble.png"
import SmallBubble from "../../img/Brownbubble.png"

function Fold() {
  return (
    <section className={fold}>
      <div className={text}>
        <h1>LIMPEZA TÊXTIL</h1>
        <h3>Carpetes. Sofás. Colchões.</h3>
      </div>
      <img className={bigbubble} data-speed='7' src={BigBubble} alt='' />
      <img className={smallbubble} data-speed='2' src={SmallBubble} alt='' />
      <a href='#servico'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
          <path d='M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 14.414l-5.707-5.707l1.414-1.414L12 13.586l4.293-4.293l1.414 1.414L12 16.414z' />
        </svg>
      </a>
    </section>
  )
}

export default Fold
