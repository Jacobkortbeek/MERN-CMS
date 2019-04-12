import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
  Row
} from 'reactstrap';

class LogInForm extends Component {
  render() {
    return(
      <div>
        <Container className="jk-container grey curvedCorner padAllMaster margin-top">
          <Container>
            <Row className="fullCenter">
              <h3>Log In Here!</h3>
            </Row>
          </Container>
          <Container>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </Container>
        </Container>
      </div>
    );
  }
}

export default LogInForm;
