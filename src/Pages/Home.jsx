import React from "react"
import { Fold } from "../Components/2.Fold/Fold"
import { Header } from "../Components/1.Header/header"
import { Servicos } from "../Components/3.Servicos/Servicos"
import { Sobre } from "../Components/4.Sobre/Sobre"
import { Testemunhos } from "../Components/5.Testemunhos/Testemunhos"

function Home() {
  return (
    <React.Fragment>
      <Header />
      <Fold />
      <Servicos />
      <Testemunhos />
      <Sobre />
    </React.Fragment>
  )
}

export default Home
