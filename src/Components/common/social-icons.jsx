import React from "react"
import Facebook from "../../img/facebook.png"
import Olx from "../../img/olx.png"
import Insta from "../../img/insta.png"
import styled, { css } from "styled-components"

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

export const SocialIcons = ({ size }) => (
  <StyledSocialIcons $size={size}>
    {socialArr.map(({ src, alt, href }) => (
      <a key={href} href={href} target='_blank' rel='noopener noreferrer'>
        <img {...{ loading: "lazy", src, alt }} />
      </a>
    ))}
  </StyledSocialIcons>
)

const StyledSocialIcons = styled.nav`
  display: flex;
  justify-content: center;
  margin: 1rem 2rem 2rem;
  & img {
    width: 3rem;
    cursor: pointer;
  }
  ${({ $size }) =>
    $size === "small" &&
    css`
      margin: 0;
      height: 12px;
      width: 12px;
    `}
`
