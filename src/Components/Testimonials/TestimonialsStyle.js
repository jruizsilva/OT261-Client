import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: #ffff;
`;
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
  height: 100vh;
  gap: 20px;
  margin: 3rem 1rem;
`;
export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100vh;
`;
export const Image = styled.img`
  width: 90%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  border-radius: 20px;
  object-fit: cover;
`;
export const FromWrapper = styled.div`
  width: 100%;
  height: auto;
  border-radius: 20px;
`;
export const TitleContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const Title = styled.h3`
  font-weight: 600;
  font-size: 48px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 80%;
  height: 100%;
  gap: 20px;
  align-items: inherit;
  justify-content: center;
`;
export const FromGroup = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0.5rem 0rem;
`;

export const Input = styled.input`
  padding: 10px 30px;
  border: 1px solid #c1c1c1;
  border-radius: 10px;
`;

export const ErrorMessage = styled.p`
  color: #f20408;
  font-size: 15px;
  padding: 0;
  font-weight: 300;
`;

export const Button = styled.button`
  width: 100%;
  background-color: #2e86c1;
  padding: 10px 15px;
  border: none;
  color: #fff;
  border: none;
  border-radius: 10px;
`;
