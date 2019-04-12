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

class ContactForm extends Component {
  render() {
    return(
      <div>
        <Container className="jk-container grey curvedCorner padAllMaster">
          <Container>
            <Row className="fullCenter">
              <h3>Contact Me</h3>
            </Row>
          </Container>
          <Container>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Name</Label>
              <Input type="text" name="name" id="examplePassword" placeholder="Name" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Your Message</Label>
                <Input type="textarea" name="text" id="exampleText" />
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </Container>
        </Container>
      </div>
    );
  }
}

export default ContactForm;
