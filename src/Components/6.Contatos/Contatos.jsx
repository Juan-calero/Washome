import React from "react"
import BigBubble from "../../img/Bluebubble.png"
import SmallBubble from "../../img/Brownbubble.png"
import {
  contato,
  bigbubble,
  smallbubble,
  form,
  text,
  wrapper,
  info,
} from "./contactos.module.scss"

const social = [
  {
    content: "washomelimpezas@gmail.com",
    href: "mailto:washomelimpezas@gmail.com",
    d: "M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM4 4h8c.143 0 .281.031.409.088L8 9.231L3.591 4.088A.982.982 0 0 1 4 4zm-1 7V5l.002-.063l2.932 3.421l-2.9 2.9A.967.967 0 0 1 3 11zm9 1H4c-.088 0-.175-.012-.258-.034L6.588 9.12l1.413 1.648L9.414 9.12l2.846 2.846a.967.967 0 0 1-.258.034zm1-1c0 .088-.012.175-.034.258l-2.9-2.9l2.932-3.421L13 5v6z",
    viewBox: "0 0 16 16",
  },
  {
    content: "+351 92 726 45 65 - João Campos",
    href: "tel:+351927264565",
    d: "M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0zM384.375 238.33c12.362-.729 23.536 6.66 32.007 19.775l82.031 155.566c8.637 18.434 3.729 38.172-9.155 51.343l-37.573 37.573c-2.319 3.178-3.845 6.757-3.882 10.693c14.409 55.775 58.117 107.223 96.681 142.603c38.562 35.38 80.009 83.281 133.812 94.629c6.65 1.855 14.797 2.52 19.556-1.903l43.652-44.458c15.068-11.421 36.866-16.956 52.954-7.617h.732l148.021 87.378c21.728 13.619 23.979 39.944 8.423 55.957L849.683 941.016c-15.056 15.44-35.058 20.631-54.491 20.654c-85.948-2.575-167.158-44.759-233.862-88.11c-109.49-79.653-209.923-178.446-272.975-297.803c-24.182-50.05-52.589-113.91-49.878-169.774c.242-21.016 5.928-41.605 20.728-55.151l101.953-101.953c7.942-6.758 15.799-10.111 23.217-10.549z",
    viewBox: "0 0 1200 1200",
  },
]

function Contatos() {
  const map = social.map(({ content, href, d, viewBox }, index) => {
    return (
      <a key={index} href={href} className={info}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox={viewBox}>
          <path d={d} />
        </svg>
        <p>{content}</p>
      </a>
    )
  })
  return (
    <section className={contato} id='contato'>
      <img
        loading='lazy'
        className={bigbubble}
        data-speed='3'
        src={BigBubble}
        alt=''
      />
      <img
        loading='lazy'
        className={smallbubble}
        data-speed='-1'
        src={SmallBubble}
        alt=''
      />
      <div className={text}>
        <h2>Peça já o seu orçamento</h2>
        <p className='fw-500'>GRATUITO E IMEDIATO</p>
        <p>Segunda a Sábado: 09h - 13h | 14h - 22h</p>
      </div>
      <form
        className={form}
        method='POST'
        action='https://formspree.io/f/mbjqdgwj'
        id='contato--form'>
        <div>
          <input type='text' placeholder='Nome*' name='Nome' required />
          <input type='text' placeholder='Telefone*' name='Telefone' required />
        </div>
        <input type='email' placeholder='Email (Opcional)' name='_replyto' />
        <textarea
          placeholder='Mensagem*'
          name='message'
          rows='10'
          required></textarea>
        <button className='btn__blue' type='submit'>
          Fale Connosco
        </button>
      </form>
      <div className={wrapper}>
        <p>ou contacte-nos em:</p>
        {map}
      </div>
    </section>
  )
}

export default Contatos
