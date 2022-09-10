import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeStyles from "./styles";

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
  </HomeStyles>
);
};



export default Home;
