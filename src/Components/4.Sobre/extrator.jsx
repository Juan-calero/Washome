import React, { useEffect, useState } from "react"
import ExtratorImg from "../../img/Extrator.png"
import styled from "styled-components"

import {
  extrator,
  title,
  titletext,
  extrator__scrolled,
  title__scrolled,
} from "./sobre.module.scss"

export const Extrator = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () => {
    const section = document
      .getElementById("extrator")
      .getBoundingClientRect().y
    setIsScrolled(section < 400)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <React.Fragment>
      <img
        loading='lazy'
        className={`${isScrolled ? extrator__scrolled : ""} ${extrator}`}
        src={ExtratorImg}
        id='extrator'
        alt=''
      />
      <div className={`${isScrolled ? title__scrolled : ""} ${title}`}>
        <h2 className={titletext}>SOBRE A WASHOME</h2>
      </div>
    </React.Fragment>
  )
}
