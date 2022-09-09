import styled from 'styled-components'

const StyledContactContainer = styled('div')`
  font-family: var(--font-poppins);
  text-align: center;
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
  padding-top: 2rem;
  @media screen and (min-width: 768px) {
    padding-top: 58px;
  }
`
const StyledDonationContainer = styled('div')`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  @media screen and (min-width: 768px) {
    row-gap: 32px;
  }
`
const StyledWrapper = styled('div')``

const StyledDonationTitle = styled('h3')`
  font-size: 2rem;
  margin: 0;
`

const StyledContactTitle = styled('h3')`
  font-size: 2rem;
  margin: 0;
  margin-bottom: 32px;
`
const StyledButton = styled('button')`
  background-color: red;
  height: 3rem;
  width: 211px;
  box-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  color: white;
  border-radius: 1.25rem;
  font-weight: 600;
  margin: auto;
  margin-top: ${({ isSubmit }) => (isSubmit ? '24px' : '0')};
  font-size: 24px;
  @media screen and (min-width: 768px) {
    margin: 0;
    margin-top: ${({ isSubmit }) => (isSubmit ? '24px' : '0')};
    font-size: 32px;
  }
`
const StyledFormContainer = styled('div')``
const StyledForm = styled('form')`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`
const StyledBox = styled('div')``
const StyledInput = styled('input')`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  height: 48px;
  @media screen and (min-width: 768px) {
    height: 70px;
  }
  ::placeholder {
    color: #989898;
  }
`
const StyledErrorText = styled('p')``

export {
  StyledContactContainer,
  StyledDonationContainer,
  StyledWrapper,
  StyledButton,
  StyledFormContainer,
  StyledForm,
  StyledBox,
  StyledInput,
  StyledErrorText,
  StyledDonationTitle,
  StyledContactTitle,
}
