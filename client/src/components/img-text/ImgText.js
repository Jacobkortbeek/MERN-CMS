import React from 'react';
import ImgTextImg from './ImgTextImg';
import ImgTextText from './ImgTextText';
import { Container, Row, Col } from 'reactstrap';
import './ImgText.css';

const ImgText = (props) => {
  return(
    <div className="ImgText">
      <Container>
        <Row>
          <Col xs="6">
            <ImgTextImg />
          </Col>
          <Col xs="6">
            <ImgTextText about={props.about} />
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default ImgText;
