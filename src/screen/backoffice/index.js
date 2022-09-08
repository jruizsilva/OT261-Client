<<<<<<< HEAD
import React from "react";
import { Container, Row, Stack, Col } from "react-bootstrap";

import { adminCardList, userCardList } from "./consts";
import { StyledContainer } from "./styles";
import { CardBackoffice } from "../../Components/CardBackoffice";
import { useSelector } from "react-redux";
=======
import React from 'react'
import { Container, Row, Stack, Col } from 'react-bootstrap'

import { adminCardList, userCardList } from './consts'
import { StyledContainer } from './styles'
import { CardBackoffice } from '../../Components/CardBackoffice'
import { useSelector } from 'react-redux'
>>>>>>> develop

const Backoffice = () => {
  const { isAdmin } = useSelector(state => state.user)

  return (
    <>
      <StyledContainer className="pt-4">
        <Stack as="main">
          <Container>
<<<<<<< HEAD
            <Row as="ul" className="ps-0 list-unstyled">
=======
            <Row as='ul' className='ps-0'>
>>>>>>> develop
              {isAdmin &&
                adminCardList.map(({ id, ...rest }) => (
                  <Col
                    key={id}
                    sm={6}
                    md={6}
                    lg={4}
                    xl={3}
                    as="li"
                    className="mb-3"
                  >
                    <CardBackoffice {...rest} />
                  </Col>
                ))}
              {!isAdmin &&
                userCardList.map(({ id, ...rest }) => (
                  <Col
                    key={id}
                    sm={6}
                    md={6}
                    lg={4}
                    xl={3}
                    as="li"
                    className="mb-3"
                  >
                    <CardBackoffice {...rest} />
                  </Col>
                ))}
            </Row>
          </Container>
        </Stack>
      </StyledContainer>
    </>
  )
}

export default Backoffice
