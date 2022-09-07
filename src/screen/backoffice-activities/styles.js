import styled from 'styled-components'
import { Stack, Button } from 'react-bootstrap'

const StyledContainer = styled(Stack)`
  background-color: #edf2f7;
  min-height: calc(100vh - 6.25rem);
`

export const TitleGroup = styled.div`
  height: 48px;
  margin-bottom: 0.5em;
  display: flex;
`
export const ButtonItem = styled(Button)`
  height: 100%;
  width: 100%;
  max-width: 160px;
  margin-left: auto;
  cursor: pointer;
`
export const ActivitiyTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`
export { StyledContainer }
