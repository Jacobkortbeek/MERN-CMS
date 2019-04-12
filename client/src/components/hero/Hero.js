import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './Hero.css';

const Hero = (props) => {
  return (
    <Jumbotron fluid>
      <Container>
        <h1 className="dispaly-3 text-center">{props.hero.title}</h1>
      <p className="lead text-center">{props.hero.subHeading}</p>
      </Container>
    </Jumbotron>
);
}

export default Hero;
