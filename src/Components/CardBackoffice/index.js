import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';

export const CardBackoffice = ({ title, image, to }) => {
  return (
    <Card>
      <Card.Body className='text-center d-flex flex-column'>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant='top' src={image} className='w-25 mx-auto mb-2' />
        <LinkContainer to={to}>
          <Button variant='primary' className='mx-auto'>
            Ir
          </Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

CardBackoffice.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
