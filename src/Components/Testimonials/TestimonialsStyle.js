import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 400px;
  margin: 2rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffff;
  @media screen and (max-width: 580px) {
    height: 350px;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: auto;
  @media screen and (max-width: 1100px) {
    display: none;
  }
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
  height: auto;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1100px) {
    width: 80%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const TitleContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 580px) {
    align-items: flex-end;
    justify-content: center;
  }
`;
export const Title = styled.h3`
  font-family: Poppins, sans-serif;
  font-weight: 600;
  font-size: 48px;
  margin-top: 1rem;
  @media screen and (max-width: 768px) {
    font-size: 38px;
  }
  @media screen and (max-width: 580px) {
    font-size: 30px;
  }
  @media screen and (max-width: 400px) {
    font-size: 24px;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 80%;
  height: auto;
  gap: 20px;
  align-items: inherit;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  } ;
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
  @media screen and (max-width: 580px) {
    font-size: 1rem;
  }
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
