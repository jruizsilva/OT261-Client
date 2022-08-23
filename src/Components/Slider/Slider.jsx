import Carousel from 'react-bootstrap/Carousel';

function Slider({ slides, classes }) {
  return (
    <Carousel className={classes}>
      {slides.map((slide) => (
        <Carousel.Item key={slide.id}>
          <img className="d-block w-100" src={slide.image} alt={slide.title} />
          <Carousel.Caption>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;
