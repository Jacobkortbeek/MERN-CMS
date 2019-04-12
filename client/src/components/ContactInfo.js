import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

const ContactInfo = (props) => {
  return(
    <Container>
      <Row>
        <Col md='6' >
          <ul>
            <li>{props.info.infoOne}</li>
          <li>{props.info.infoTwo}</li>
          </ul>
        </Col>
        <Col md='6' >
          <ul>
            <li>{props.info.infoThree}</li>
          <li>{props.info.infoFour}</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactInfo;
