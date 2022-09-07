import React, { useState } from 'react'
import { useEffect } from 'react'
import { useCurrentWidth } from '../../hooks/useCurrentWidth'
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
  const { currentWidth } = useCurrentWidth()

  console.log(currentWidth)

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
