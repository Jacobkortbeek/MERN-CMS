import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

class AppFooter extends Component {
  render() {
    return(
      <Container fluid className="footer">
        <Row>
          <h1 className="text-center">MERN CMS</h1>
        </Row>
      </Container>
    );
  }
}

export default AppFooter;
