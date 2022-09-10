import styled from "styled-components";

const StaffCardsListStyles = styled.ul`
  max-width: ${({ isUpper768px }) => (isUpper768px ? '81rem' : '25rem')};
  margin: 0 auto;
  display: flex;
  justify-content: ${({ isUpper768px }) =>
    isUpper768px ? 'space-between' : 'center'};
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 0;
  margin-bottom: 4rem;
`;

export default StaffCardsListStyles;