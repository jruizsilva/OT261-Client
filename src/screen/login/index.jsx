import React from 'react'
import {
  StackContainer,
  StyledWelcomeText,
  StyledTitle,
  StyledText,
  StyledWrapper,
  StyledRegisterText,
  StyledForm,
  StyledInput,
  StyledButton,
} from './styles'

const Login = () => {
  return (
    <StackContainer direction='vertical'>
      <StyledWrapper>
        <StyledWelcomeText>Bienvenido</StyledWelcomeText>
        <StyledTitle>Inicia sesión en tu cuenta!</StyledTitle>
        <StyledForm>
          <StyledInput placeholder='Email' />
          <StyledInput placeholder='Contraseña' />
          <StyledButton onClick={e => e.preventDefault()}>
            Inicia sesión
          </StyledButton>
        </StyledForm>
        <StyledText>
          No tienes una cuenta?
          <StyledRegisterText>Registrate</StyledRegisterText>
        </StyledText>
      </StyledWrapper>
    </StackContainer>
  )
}

export default Login
