import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
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
export const Title = styled.h1`
  width: 90vw;
  height: 10%;
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
  font-weight: 300;
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
`;
