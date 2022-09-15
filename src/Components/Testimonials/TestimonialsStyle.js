import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 500px;
  margin: 2rem auto;
  display: flex;
  align-items: center;
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
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  object-fit: contain;
`;
export const FromWrapper = styled.div`
  width: 50%;
  height: 100vh;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const TitleContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const Title = styled.h3`
  font-family: Poppins, sans-serif;
  font-weight: 600;
  font-size: 48px;
  margin-top: 1rem;
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
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  font-family: Poppins, sans-serif;
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
  font-family: Poppins, sans-serif;
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
