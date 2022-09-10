import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeStyles from "./styles";
import { icons } from '../../assets';
import StaffCardsList from "../../Components/StaffCardsList/StaffCardsList";

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
          <p>Ver todos {'>'}</p>
        </Link>
      </div>
      <StaffCardsList staff_members={icons.staff_members.slice(0, 6)} />
    </div>
  </HomeStyles>
);
};



export default Home;
