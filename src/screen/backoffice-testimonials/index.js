import {
  Container,
  SpinnerContainer,
  TestimonialsWrapper,
  Title,
  CardContainer,
  ImgWrapper,
  Img,
  NameWrapper,
  Name,
  TestimonialWrapper,
  Testimonial,
  TitleWrapper,
  ButtonsWrapper,
  AddTestimonial,
  BackToHome,
} from "./styles.js";
import { usersTestimonials } from "./utils.js";
// import { useDispatch } from "react-redux";
import { useState } from "react";

import TestimonialForm from "../../Components/Testimonials/TestimonialsForm";

const BackofficeTestimonials = () => {
  // const dispatch = useDispatch();

  const [openCreateModal, setOpenCreateModal] = useState(false);
  //hadeling modal state
  const closeModal = () => {
    setOpenCreateModal(false);
  };

  return (
    <>
      <Container>
        <TitleWrapper>
          <Title>Testimonios</Title>
        </TitleWrapper>
        {usersTestimonials ? (
          <TestimonialsWrapper>
            {usersTestimonials.map((user, index) => (
              <CardContainer key={index}>
                <ImgWrapper>
                  <Img /* src={user.picture.large} alt={user.email} */ />
                </ImgWrapper>
                <NameWrapper>
                  <Name>{user.name}</Name>
                  <Name>{user.lastname}</Name>
                </NameWrapper>
                <TestimonialWrapper>
                  <Testimonial>{user.testimonial}</Testimonial>
                </TestimonialWrapper>
              </CardContainer>
            ))}
          </TestimonialsWrapper>
        ) : null}

        <ButtonsWrapper>
          <AddTestimonial onClick={() => setOpenCreateModal(true)}>
            Agregar mi testimonio!
          </AddTestimonial>
          <BackToHome to="/">Ir al inicio</BackToHome>
        </ButtonsWrapper>
      </Container>
      {openCreateModal && (
        <TestimonialForm
          openCreateModal={openCreateModal}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default BackofficeTestimonials;
