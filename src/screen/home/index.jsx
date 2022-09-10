import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeStyles from "./styles";
import { icons } from '../../assets';
import StaffCardsList from "../../Components/StaffCardsList/StaffCardsList";
import TestimonialsList from "../../Components/TestimonialsList/TestimonialsList";

const Home = () => { 
return (
  <HomeStyles className="container">
    <div className="home-top-section">
      <div className="home-top-section-left">
        <h3>Hola! Bienvenidx</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing
          dignissim ac et eleifend lacus, rhoncus, dignissim sagittis. Tellus ac
          a, elementum ut. Tellus a morbi tincidunt ultricies malesuada eget
          turpis. Lacus enim non enim, velit hac turpis interdum arcu.
          Suspendisse at vel ultrices amet orci enim lectus porttitor ut.
        </p>
        <Button as={Link} className="btn-rojo" to="/contact">
          Contactanos
        </Button>
      </div>
      <div className="home-top-section-right">
        <img src="/images/home-screen-img.jpg"></img>
      </div>
    </div>
    <div className="home-staff-section">
      <div className="section-title">
        <h4>Nuestro Staff</h4>
        <Link to="/about">
          Ver todos {'>'}
        </Link>
      </div>
      <StaffCardsList staff_members={icons.staff_members.slice(0, 6)} />
    </div>
    <div className="home-testimonials-section">
      <div className="section-title">
        <h4>Testimonios</h4>
        <Link to="/testimonials">
          Ver todos {'>'}
        </Link>
      </div>
      <TestimonialsList testimonials={icons.testimonials_imgs} />
    </div>
  </HomeStyles>
);
};



export default Home;
