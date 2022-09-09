import React from 'react'
import {
  StyledButton,
  StyledContactContainer,
  StyledDonationContainer,
  StyledForm,
  StyledFormContainer,
  StyledTitle,
} from './styles'

const Contact = () => {
  return (
    <StyledContactContainer>
      <StyledDonationContainer>
        <StyledTitle>¿Queres contribuir?</StyledTitle>
        <StyledButton>Contribuir</StyledButton>
      </StyledDonationContainer>
      <StyledFormContainer>
        <StyledTitle>¡Contactate con nosotros!</StyledTitle>
        <StyledForm>
          {/* <StyledBox></StyledBox> map here*/}
          <StyledButton>Enviar consulta</StyledButton>
        </StyledForm>
      </StyledFormContainer>
      <StyledButton>Ir al inicio</StyledButton>

      {}
    </StyledContactContainer>
  )
}

export default Contact
