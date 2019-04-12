import React, { Component } from 'react';
import { Container, Row, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './mortgage.css';
// import PropTypes from 'prop-types';


class Mortgage extends Component {

  state = {
    monthlyRate: 558,
    propertyPrice: 100000,
    deposit: 20000,
    interestRate: 3.5,
    yearsRepay: 25
  };

  propertyVal = React.createRef();
  deposit = React.createRef();
  interestRate = React.createRef();
  yearsRepay = React.createRef();

  handleSubmit = (e) => {
    console.log("Form Submited!!");
    e.preventDefault();
    let propertyVal = this.propertyVal.current.value;
    let deposit = this.deposit.current.value;
    let interestRate = this.interestRate.current.value;
    let yearsRepay = this.yearsRepay.current.value;
    let eachMonth = yearsRepay * 12;
    let leftPrice = propertyVal - deposit;
    let totalInterestRate = interestRate * yearsRepay;
    let interestFull = totalInterestRate * 1000;
    var monthlyRate = Math.floor((leftPrice + interestFull) / eachMonth);
    this.setState({
      monthlyRate: monthlyRate
    });
  }

  handleTypeSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submited From typing!!");
    let propertyVal = this.propertyVal.current.value;
    let deposit = this.deposit.current.value;
    let interestRate = this.interestRate.current.value;
    let yearsRepay = this.yearsRepay.current.value;
    let eachMonth = yearsRepay * 12;
    let leftPrice = propertyVal - deposit;
    let totalInterestRate = interestRate * yearsRepay;
    let interestFull = totalInterestRate * 1000;
    var monthlyRate = Math.floor((leftPrice + interestFull) / eachMonth);
    this.setState({
      monthlyRate: monthlyRate
    });
  }


  handleValueInterest = (e) => {
    this.setState({
      interestRate: e.target.value,
    });
    this.handleTypeSubmit();
  }

  handleValuePropertyPrice = (e) => {
    this.setState({
      propertyPrice: e.target.value
    });
    this.handleTypeSubmit();
  }

  handleValueYearsRepay = (e) => {
    this.setState({
      yearsRepay: e.target.value
    });
    this.handleTypeSubmit();
  }

  handleValueDeposit = (e) => {
    this.setState({
      deposit: e.target.value
    });
    this.handleTypeSubmit();
  }

  render() {
    return(
      <Container className="mortgage curvedCorner padAll jk-container grey shadow">
        <div className="jk-title curvedCorner">
          <h2>Mortgage Calculator!</h2>
        </div>
        <Form className="jk-input" onSubmit={this.handleSubmit}>
          <FormGroup className="mt-2">
            <Label for="propertyPrice"><strong>Propery Price</strong></Label>
            <Input className="curvedCorner" id="propertyPrice" ref={this.propertyVal} type="number" name="propertyPrice" value={this.state.propertyPrice} onChange={ this.handleTypeSubmit } placeholder="Property Price" />
          </FormGroup>
          <FormGroup className="mt-2">
            <Label for="deposit"><strong>Deposit</strong></Label>
            <Input className="curvedCorner" id="depsit" ref={this.deposit} type="number" name="deopsit" value={this.state.deposit} onChange={this.handleTypeSubmit} placeholder="Deposit" />
          </FormGroup>
          <FormGroup className="mt-2">
            <Label for="interest"><strong>Interest</strong></Label>
            <Input className="curvedCorner" id="interest" ref={this.interestRate} type="number" name="interest" min="0" maxLength="10" step="0.01" value={this.state.interestRate} onChange={this.handleTypeSubmit} placeholder="Interest" />
          </FormGroup>
          <FormGroup className="mt-2">
            <Label for="yearsRepay"><strong>Mortgage Length</strong></Label>
            <Input className="curvedCorner" id="yearsRepay" ref={this.yearsRepay} type="number" name="yearsRepay" value={this.state.yearsRepay} onChange={this.handleTypeSubmit} placeholder="Repayment Period" />
          </FormGroup>
          <Input className="curvedCorner" type="submit" placeholder="Submit" />
        </Form>
        <Row className="fullCenter mt-3">
          <h3>Monthly Rate:{this.state.monthlyRate}</h3>
        </Row>
      </Container>
    );
  }
}

export default Mortgage;
