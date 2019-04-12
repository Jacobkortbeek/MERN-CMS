import React from 'react';
import {
  Container,
  Row
} from 'reactstrap';

const Text = (props) => {
  return(
    <div>
      <Container className="text padAll curvedCorner jk-container grey shadow margin-top">
        <Row className="fullCenter">
          <h2 className="jk-title curvedCorner">{props.text.title}</h2>
        </Row>
        <Row className="fullCenter margin-topBot">
          <p className="jk-title curvedCorner">{props.text.paragraph}</p>
        </Row>
      </Container>
    </div>
  );
}

export default Text;
