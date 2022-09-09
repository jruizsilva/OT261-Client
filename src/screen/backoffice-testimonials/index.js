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
} from "./styles.js";
import useFetch from "./utils.js";
import Spinner from "react-bootstrap/Spinner";
// import TestimonialForm from "../../Components/Testimonials/TestimonialsForm";

const BackofficeTestimonials = () => {
  const { data, loading /* , error  */ } = useFetch(
    "https://randomuser.me/api/?results=10"
  );
  // console.log(data[0]);
  if (loading) {
    return (
      <SpinnerContainer>
        <Spinner animation="border" variant="dark" size="lg" />
      </SpinnerContainer>
    );
  } else {
    return (
      <Container>
        <Title>Testimonios</Title>
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
                    {/* “testimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoni” */}
                  </Testimonial>
                </TestimonialWrapper>
              </CardContainer>
            ))}
          </TestimonialsWrapper>
        ) : null}
      </Container>
    );
  }
};

export default BackofficeTestimonials;
