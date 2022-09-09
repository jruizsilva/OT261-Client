import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 3rem 0rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const SpinnerContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const TitleWrapper = styled.div`
  width: 50%;
  height: 10%;
  margin: 5rem 0rem 1rem 0rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h1`
  width: 90vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: dark;
  font-weight: 500;
  font-size: 3rem;
`;
export const TestimonialsWrapper = styled.div`
  width: 100vw;
  height: 80%;
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(4, 20%);
  column-gap: 5px;
  row-gap: 20px;
`;
export const CardContainer = styled.div`
  border-radius: 30px;
  background-color: #fdffa4;
  height: 100%;
  width: 90%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
export const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const Img = styled.img`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  border-radius: 50%;
  object-fit: cover;
`;

export const NameWrapper = styled.div`
  width: 90%;
  height: 30px px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;
export const Name = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: black;
`;
export const TestimonialWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Testimonial = styled.p`
  font-size: 1rem;
  font-weight: 300;
`;
export const ButtonsWrapper = styled.div`
  width: 100vw;
  height: 200px;
  margin: 2rem 0rem 0rem 15rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;
export const AddTestimonial = styled.button`
  width: 25%;
  height: 70px;
  border: none;
  margin-bottom: 1rem;
  border-radius: 20px;
  font-size: 1.8rem;
  background-color: #ff0000;
  color: white;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  &:focus,
  &:hover {
    background-color: #c12222;
  }
`;
export const BackToHome = styled.button`
  width: 15%;
  height: 60px;
  border: 1px solid black;
  margin-bottom: 1rem;
  border-radius: 20px;
  font-size: 1.8rem;
  background-color: white;
  color: black;
  box-shadow: rgba(0, 0, 0, 0.24) 5px 5px 5px;
  cursor: pointer;
`;
