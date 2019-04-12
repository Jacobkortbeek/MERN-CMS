import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const PageHeader = (props) => {
  return (
    <Jumbotron fluid>
      <Container>
        <h1 className="dispaly-3 text-center">{props.header.title}</h1>
      </Container>
    </Jumbotron>
);
}

export default PageHeader;
