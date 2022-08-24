import React from 'react';
import { Container, Stack } from 'react-bootstrap';
import { StyledContainer } from './styles';

export const BackofficeActivities = () => {
  return (
    <StyledContainer className='pt-5'>
      <Stack as='main'>
        <Container>backoffice - activities</Container>
      </Stack>
    </StyledContainer>
  );
};
