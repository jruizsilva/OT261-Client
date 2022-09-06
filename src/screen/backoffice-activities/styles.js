import styled from "styled-components";
import { Stack, Button } from "react-bootstrap";

const StyledContainer = styled(Stack)`
  background-color: #edf2f7;
  min-height: calc(100vh - 6.25rem);
`;

export const TitleGroup = styled.div`
  width: 100%;
  height: 100px;
  display: grid;
  grid-template-columns: repeat(2, 50%);
`;
export const ButtonItem = styled(Button)`
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  margin: 1.5rem 0rem 0rem auto;
  cursor: pointer;
`;
export const ActivitiyTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export { StyledContainer };
