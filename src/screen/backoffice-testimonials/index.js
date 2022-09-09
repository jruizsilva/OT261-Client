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
import useFetch from "./utils.js";
// import { useDispatch } from "react-redux";
import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import TestimonialForm from "../../Components/Testimonials/TestimonialsForm";

const BackofficeTestimonials = () => {
  // const dispatch = useDispatch();

  const [openCreateModal, setOpenCreateModal] = useState(false);
  //hadleing modal state
  const closeModal = () => {
    setOpenCreateModal(false);
  };
  const { data, loading /* , error  */ } = useFetch(
    "https://randomuser.me/api/?results=10"
  );
  console.log(openCreateModal);
  if (loading) {
    return (
      <SpinnerContainer>
        <Spinner animation="border" variant="dark" size="lg" />
      </SpinnerContainer>
    );
  } else {
    return (
      <>
        <Container>
          <TitleWrapper>
            <Title>Testimonios</Title>
          </TitleWrapper>
          {data ? (
            <TestimonialsWrapper>
              {data.map((user) => (
                <CardContainer key={user.login.uuid}>
                  <ImgWrapper>
                    <Img src={user.picture.large} alt={user.email} />
                  </ImgWrapper>
                  <NameWrapper>
                    <Name>{user.name.first}</Name>
                    <Name>{user.name.last}</Name>
                  </NameWrapper>
                  <TestimonialWrapper>
                    <Testimonial>
                      "Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old."
                    </Testimonial>
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
  }
};

export default BackofficeTestimonials;
