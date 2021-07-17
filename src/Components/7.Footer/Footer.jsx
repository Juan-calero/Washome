import React from "react"
import Facebook from "../../img/facebook.png"
import Olx from "../../img/olx.png"
import Insta from "../../img/insta.png"
import Logo from "../../img/washomeLogoWhite.png"
import { footer, logo, social } from "./footer.module.scss"

const socialArr = [
  {
    alt: "Olx",
    src: Olx,
    href: "https://www.olx.pt/d/anuncio/washome-limpeza-profissional-de-carpetes-tapetes-sofs-colches-IDv4lsE.html#cfb5ec5567",
  },
  {
    alt: "Facebook",
    src: Facebook,
    href: "https://www.facebook.com/washomelimpezaconforto.washome",
  },
  {
    alt: "Instagram",
    src: Insta,
    href: "https://www.instagram.com/washome_limpezas/",
  },
]

function Footer() {
  const items = socialArr.map(({ src, alt, href }, index) => {
    return (
      <a key={index} href={href} target='_blank' rel='noopener noreferrer'>
        <img loading='lazy' src={src} alt={alt} />
      </a>
    )
  })

  return (
    <footer className={footer}>
      <img
        loading='lazy'
        className={logo}
        src={Logo}
        alt='Logotipo Washome - Limpeza Têxtil Profissional'
      />
      <nav className={social}>{items}</nav>
      <p>Washome® 2021 | Todos os Direitos Reservados</p>
    </footer>
  )
}

export default Footer
