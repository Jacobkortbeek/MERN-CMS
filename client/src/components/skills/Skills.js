import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import './Skills.css';
import SkillLanguages from './SkillLanguages';
import SkillDesign from './SkillDesign';
import SkillGoal from './SkillGoal';
import SkillLearning from './SkillLearning';

class Skills extends Component {
  render() {
    return(
      <Container className="skills jk-container  curvedCorner jk-title  shadow padAll margin-top">
        <Row className="fullCenter">
          <h3 className="jk-title curvedCorner">My Skills</h3>
        </Row>
        <Row>
          <Col md="6">
            <SkillLanguages />
          </Col>
          <Col md="6">
            <SkillDesign />
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <SkillGoal />
          </Col>
          <Col md="6">
            <SkillLearning />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Skills;
