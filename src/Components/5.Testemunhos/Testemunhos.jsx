import React, { useEffect, useState } from "react"
import {
  testemunhos,
  carousel,
  carouselItem,
  inner,
  text,
  nav,
  cardsnav,
  line,
  empresas,
  active2,
} from "./testemunhos.module.scss"
import Portugalia from "../../img/LogoPortugalia.png"
import Prime from "../../img/LogoPrime.png"
import Segundo from "../../img/LogoSegundo.png"
import Forever from "../../img/LogoForever.png"
import { testemunhosArr } from "../Utils/Arrays"

function Testemunhos() {
  const [testemunho, setTestemunho] = useState(0)

  //REFACTOR THIS
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setTestemunho((prevState) => (prevState + 1) % 4)
    }, 6000)
    return () => {
      clearInterval(slideInterval)
    }
  }, [])

  const mapNavItem = testemunhosArr.map((_, index) => {
    return (
      <button
        key={index}
        onClick={() => {
          setTestemunho(index)
        }}
        className={`${index === testemunho ? active2 : ""} ${line}`}
      />
    )
  })
  const mapCards = testemunhosArr.map(({ name, content }, index) => {
    return (
      <div key={index} className={carouselItem}>
        <div className='div'>
          {content.map((e, index) => {
            return (
              <p key={index} className={text}>
                {e}
              </p>
            )
          })}
        </div>
        <nav className={nav}>
          <p>
            <i>{name}</i>
          </p>
          <a
            href='https://g.page/r/CSu5aluFHb1xEAE'
            rel='noreferrer noopener'
            target='_blank'
            tabIndex='-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='xMidYMid meet'
              viewBox='0 0 24 24'>
              <path d='M3.273 1.636c-.736 0-1.363.492-1.568 1.16L0 9.272c0 1.664 1.336 3 3 3a3 3 0 0 0 3-3c0 1.664 1.336 3 3 3a3 3 0 0 0 3-3c0 1.65 1.35 3 3 3c1.664 0 3-1.336 3-3c0 1.664 1.336 3 3 3s3-1.336 3-3l-1.705-6.476a1.646 1.646 0 0 0-1.568-1.16zm8.729 9.326c-.604 1.063-1.703 1.81-3.002 1.81c-1.304 0-2.398-.747-3-1.806c-.604 1.06-1.702 1.806-3 1.806c-.484 0-.944-.1-1.363-.277v8.232c0 .9.736 1.637 1.636 1.637h17.454c.9 0 1.636-.737 1.636-1.637v-8.232a3.48 3.48 0 0 1-1.363.277c-1.304 0-2.398-.746-3-1.804c-.602 1.058-1.696 1.804-3 1.804c-1.299 0-2.394-.75-2.998-1.81zm5.725 3.765c.808 0 1.488.298 2.007.782l-.859.859a1.623 1.623 0 0 0-1.148-.447c-.98 0-1.772.827-1.772 1.806c0 .98.792 1.807 1.772 1.807c.882 0 1.485-.501 1.615-1.191h-1.615v-1.16h2.826c.035.196.054.4.054.613c0 1.714-1.147 2.931-2.88 2.931a3 3 0 0 1 0-6z' />
            </svg>
          </a>
        </nav>
      </div>
    )
  })

  return (
    <section className={testemunhos} id='testemunhos'>
      <div className={carousel}>
        <div
          className={inner}
          style={{ transform: `translateX(-${testemunho * 100}%)` }}>
          {mapCards}
        </div>
      </div>
      <nav className={cardsnav}>{mapNavItem}</nav>
      <div className={empresas}>
        <h3>Clientes satisfeitos com os nossos serviços</h3>
        <img loading='lazy' src={Portugalia} alt='Logotipo Portugália' />
        <img
          loading='lazy'
          src={Prime}
          alt='Logotipo Prime School - International School'
        />
        <img loading='lazy' src={Forever} alt='Logotipo Forever' />
        <img loading='lazy' src={Segundo} alt='Logotipo Segundo Muelle' />
      </div>
    </section>
  )
}

export default Testemunhos
