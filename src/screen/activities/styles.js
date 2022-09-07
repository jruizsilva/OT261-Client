import styled from 'styled-components'
import { Card } from 'react-bootstrap'

const StyledTitle = styled('h2')`
  font-family: var(--font-poppins);
`
const StyledDescription = styled(Card.Text)`
  font-family: var(--font-mulish);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export { StyledTitle, StyledDescription }
