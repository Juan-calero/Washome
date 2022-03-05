import React from "react"
import Colchão from "../../img/ServicosMatress.png"
import Carpete from "../../img/ServicosCarpet.png"
import Sofa from "../../img/ServicosCouch.png"

import { black, lightBlue, blue, white, pastel, brown } from "../Utils/tokens"
import styled from "styled-components"

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

export const Details = () => (
  <React.Fragment>
    {DetailsItems.map(({ title, text, note, image }, key) => (
      <StyledServico {...{ key }}>
        <Wrapper>
          <h2 children={title} />
          {text.map((paragraph, key) => (
            <p {...{ key }} children={paragraph} />
          ))}
          {note.map((note, key) => (
            <h3 {...{ key }} children={note} />
          ))}
        </Wrapper>
        <StyledFrame children={<img src={image} alt={title} />} />
      </StyledServico>
    ))}
  </React.Fragment>
)

const StyledServico = styled.section`
  position: relative;
  padding: 5% 0;
  min-height: 70vh;
  overflow: hidden;
  background: ${black};
  color: ${white};
  display: flex;
  align-items: center;
  &:nth-child(odd) {
    padding: 5rem 0;
    background: ${pastel};
    color: ${black};
  }

  @media screen and (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    &:first-of-type {
      margin-top: clamp(3.7rem, 15vw, 15vh, 4rem);
    }
  }
  @media screen and (min-width: 1024px) {
    padding: 5%;
    &:first-of-type {
      margin-top: 7rem;
    }
  }
`

const Wrapper = styled.div`
  margin: auto;
  width: min(90%, 60ch);
  & h2,
  & h3 {
    color: ${brown};
  }
  @media screen and (max-width: 1023px) {
    margin: auto;
    order: 3;
  }
  @media screen and (min-width: 1024px) {
    width: min(80%, 60ch);
  }
`

const StyledFrame = styled.div`
  background: linear-gradient(to bottom, ${lightBlue}, ${blue});
  outline: 1rem solid ${black};
  position: relative;
  margin: 2rem auto;
  height: min(60vw, 15rem);
  width: min(80vw, 20rem);
  & img {
    position: absolute;
    bottom: -20%;
    left: 0;
    right: 0;
    width: 130%;
  }
  @media screen and (max-width: 1023px) {
    height: min(60vw, 21rem);
    width: min(80vw, 28rem);
    & img {
      bottom: -15%;
    }
  }
  @media screen and (min-width: 1024px) {
    order: 2;
    height: 15rem;
    width: 20rem;
  }
`
