import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import './Newscard.css'

const NewsCard = (props) => {
 
    return (
   <Container fluid >
      <Row xs={2} md={4}  className="g-4">
      {Array.from({ length:1}).map((_, idx) => (
        <Col> 
            {[
        'Info',
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
              <Card.Title>Novedades</Card.Title>
              <Card.Text>
                {props.text}
              </Card.Text>
              <button class="btn btn-primary btn-lg" type="button">Ver Novedades</button>
            </Card.Body>
          </Card>
             ))}
        </Col>
          ))}
    </Row>
    </Container>
    )
}
    
    
    export default NewsCard;