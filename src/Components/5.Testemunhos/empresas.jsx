import * as React from "react"
import { empresas } from "./testemunhos.module.scss"
import Portugalia from "../../img/LogoPortugalia.png"
import Prime from "../../img/LogoPrime.png"
import Segundo from "../../img/LogoSegundo.png"
import Forever from "../../img/LogoForever.png"

export const Empresas = () => (
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
)
