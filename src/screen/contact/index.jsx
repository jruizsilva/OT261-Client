import React from 'react'
import { useFormik } from 'formik'
import { contactFields } from './const'
import {
  StyledBox,
  StyledButton,
  StyledContactContainer,
  StyledDonationContainer,
  StyledErrorText,
  StyledForm,
  StyledFormContainer,
  StyledInput,
  StyledTitle,
} from './styles'

const Contact = () => {
  const formik = useFormik({})

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
          {contactFields.map(({ name, placeholder }) => (
            <StyledBox>
              <StyledInput
                name={name}
                placeholder={placeholder}
                autoComplete='off'
                type='text'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched[name] && formik.errors[name] && (
                <StyledErrorText>{formik.errors[name]}</StyledErrorText>
              )}
            </StyledBox>
          ))}
          <StyledButton>Enviar consulta</StyledButton>
        </StyledForm>
      </StyledFormContainer>
      <StyledButton>Ir al inicio</StyledButton>
    </StyledContactContainer>
  )
}

export default Contact
