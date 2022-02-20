import React from "react"
import styled from "styled-components"
import { testemunhosArr } from "../Utils/Arrays"
import { black, white } from "../Utils/tokens"

export const Carousel = ({ testemunho }) => (
  <StyledCarousel>
    <InnerCarousel style={{ transform: `translateX(-${testemunho * 100}%)` }}>
      {testemunhosArr.map(({ name, content }, index) => (
        <CarouselItem key={index}>
          <p children={<i>{name}</i>} />
          <div>
            {content.map((e, index) => (
              <Paragraph key={index} children={e} />
            ))}
          </div>
        </CarouselItem>
      ))}
    </InnerCarousel>
  </StyledCarousel>
)

const StyledCarousel = styled.div`
  overflow: hidden;
  margin: 0 auto;
  padding: 20px 0;
  @media screen and (max-width: 1023px) {
    width: min(90vw, 28rem);
    height: min(90vw, 20rem);
  }
  @media screen and (min-width: 1024px) {
    width: 54rem;
  }
`

const InnerCarousel = styled.div`
  height: 100%;
  display: flex;
  transition: all 0.9s;
  @media screen and (min-width: 1024px) {
    width: 27rem;
  }
`

const CarouselItem = styled.div`
  color: ${black};
  padding: 1rem 2rem;
  box-shadow: 2px 2px 7px ${black};
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid ${white};
  border-radius: 12px;
  background: ${white};
  @media screen and (max-width: 1023px) {
    min-width: min(80vw, 24rem);
    margin: 0 min(5vw, 2rem);
  }
  @media screen and (min-width: 1024px) {
    min-width: 25rem;
    margin: 0 1rem;
  }
`

const Paragraph = styled.div`
  margin-bottom: 0.6rem;
  width: 100%;

  @media screen and (min-width: 1024px) {
    font-size: 1rem;
  }
`
