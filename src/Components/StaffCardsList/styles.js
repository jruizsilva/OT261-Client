import styled from "styled-components";

const StaffCardsListStyles = styled.ul`
  max-width: 25rem;
  justify-content: center;
  @media screen and (min-width: 768px) {
    max-width: 81rem;
    justify-content: space-between;
  }
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 0;
  margin-bottom: 4rem;
`;

export default StaffCardsListStyles;