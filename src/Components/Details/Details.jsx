import React from "react"
import { ServicoImg, servico, servico__wrap } from "./details.module.scss"
import { frame, activeImg } from "../3.Servicos/servicos.module.scss"
import Colchão from "../../img/ServicosMatress.webp"
import Carpete from "../../img/ServicosCarpet.webp"
import Sofa from "../../img/ServicosCouch.webp"

const DetailsItems = [
  {
    title: "Colchões",
    text: [
      "Com o tempo, os colchões acumulam transpiração e células mortas da nossa pele, que os tornam excecionais para o desenvolvimento dos ácaros que provocam amarelecimento e mau odor nos tecidos.",
      "Dispomos de equipamento profissional para uma limpeza profunda e eficaz, através de lavagem técnica por meio de injeção/extracão.",
      "Aconselhamos a proceder a esta limpeza anualmente, pela sua saúde, conforto e longevidade do seu colchão.",
    ],
    note: [
      "A LIMPEZA MANUAL PODE PROVOCAR MANCHAS COM AUREOLAS E DANIFICAR AS MOLAS",
    ],
    image: Colchão,
  },
  {
    title: "Sofás & Maples",
    text: [
      "Limpar um sofá não é só aspirar ou passar um pano molhado por cima.",
      "A limpeza e higienização correta promove o bem estar, conforto e assegura que os seus sofás durem mais tempo e mantenham o bom aspeto.",
      "Conte com o nosso sistema de limpeza profissional (injeção/extração) para manter os seus sofás limpos e radiantes, capazes de lhe oferecerem o conforto que necessita.",
    ],
    note: [
      "DISPOMOS DE SERVIÇO DE IMPERMEABILIZAÇÃO.",
      "TAMBÉM TRATAMOS CUIDADOSAMENTE SOFÁS EM PELE.",
    ],
    image: Sofa,
  },
  {
    title: "Carpetes & Tapeçarias",
    text: [
      "A acumulação de sujidade em carpetes e tapeçarias é prejudicial à saúde, retira conforto e dá má imagem ao lar.",
      "Pó, areia, ácaros e agentes alérgicos instalam-se diariamente nas fibras texteis, pelo que recomendamos as nossas limpezas profundas e periódicas.",
      "Utilizamos detergente profissional específico de PH-neutro e equipamento técnico de injeção/extração, sendo este método de higienização o mais eficaz.",
    ],
    note: ["A LAVAGEM À MÃO NÃO LIMPA MAS ALASTRA A SUJIDADE"],
    image: Carpete,
  },
]

function Details() {
  const mapItems = DetailsItems.map(({ title, text, note, image }, index) => {
    return (
      <section key={index} class={servico}>
        <div class={servico__wrap}>
          <h2 class='servico__title'>{title}</h2>
          {text.map((paragraph, index) => {
            return (
              <p key={index} class='servico__text'>
                {paragraph}
              </p>
            )
          })}
          {note.map((note, index) => {
            return (
              <h3 key={index} class='servico__text--note'>
                {note}
              </h3>
            )
          })}
        </div>
        <div class={frame}>
          <img class={activeImg} src={image} alt={title} />
        </div>
      </section>
    )
  })

  return <React.Fragment>{mapItems}</React.Fragment>
}

export default Details
