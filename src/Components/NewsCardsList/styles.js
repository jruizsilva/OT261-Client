import styled from "styled-components";

const NewsCardsListStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.4em;
  @media screen and (min-width: 1200px) {
    justify-content: flex-start;
  }
  justify-content: center;
`;

export default NewsCardsListStyle;