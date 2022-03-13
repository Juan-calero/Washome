import React from "react"
import styled from "styled-components"
import { lightBlue, black } from "../Utils/tokens"
import { ContactUsAt } from "./contact-us-at"

export const ContactForm = () => (
  <React.Fragment>
    <StyledContactForm
      method='POST'
      action='https://formspree.io/f/mbjqdgwj'
      id='contato--form'>
      <div>
        <input type='text' placeholder='Nome*' name='Nome' required />
        <input type='text' placeholder='Telefone*' name='Telefone' required />
      </div>
      <input type='email' placeholder='Email' name='_replyto' />
      <textarea placeholder='Mensagem*' name='message' rows='10' required />
      <button
        className='btn__blue'
        type='submit'
        children={"PEDIR ORÇAMENTO"}
      />
    </StyledContactForm>
    <ContactUsAt />
  </React.Fragment>
)

const StyledContactForm = styled.form`
  margin: 2rem auto 1rem;
  width: min(90%, 45rem);
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  & div {
    display: flex;
  }
  & input,
  & textarea {
    width: 100%;
    margin: 0.5em 0;
    border: none;
    border-bottom: 1px solid ${black};
    background-color: transparent;
    padding: 0.5rem;
    &:hover,
    &:focus {
      border-color: ${lightBlue};
      border-width: 1px;
      outline: none;
    }
  }
  & textarea {
    border: 1px solid ${black};
  }
  @media screen and (max-width: 1023px) {
    & div {
      flex-direction: column;
    }
  }
  @media screen and (min-width: 1024px) {
    & div {
      justify-content: space-between;
      & * {
        width: 49%;
      }
    }
  }
`
