import React, { Component } from 'react';
import { Container, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import './mortgage.css';
// import PropTypes from 'prop-types';


class Mortgage extends Component {

  state = {
    monthlyRate: 0,
    propertyPrice: 100000,
    deposit: 20000,
    interestRate: 3.5,
    yearsRepay: 25
  };

  propertyPrice = React.createRef();
  deposit = React.createRef();
  interestRate = React.createRef();
  yearsRepay = React.createRef();

  handleSubmit = () => {
    let propertyPrice = this.state.propertyPrice;
    let deposit = this.state.deposit;
    let interestRate = this.state.interestRate;
    let yearsRepay = this.state.yearsRepay;
    let eachMonth = yearsRepay * 12;
    let leftPrice = propertyPrice - deposit;
    let totalInterestRate = interestRate * yearsRepay;
    let interestFull = totalInterestRate * 1000;
    var monthlyRate = Math.floor((leftPrice + interestFull) / eachMonth);
    this.setState({
      monthlyRate: monthlyRate
    });
  }

  componentDidMount() {
    this.handleSubmit();
  }

  onChange = (e) => {
    console.log("target name: " + e.target.name);
    console.log("target value: " + e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
    setTimeout(() => { this.handleSubmit() }, 300);
  };

  render() {
    return(
      <Container className="mortgage curvedCorner padAll jk-container grey shadow">
        <div className="jk-title curvedCorner">
          <h2>Mortgage Calculator!</h2>
        </div>
        <Form className="jk-input" onSubmit={this.handleSubmit}>
          <FormGroup className="mt-2">
            <Label for="propertyPrice"><strong>Propery Price</strong></Label>
            <Input className="curvedCorner" id="propertyPrice" ref={this.propertyPrice} type="number" name="propertyPrice" value={this.state.propertyPrice} onChange={ this.onChange } placeholder="Property Price" />
          </FormGroup>
          <FormGroup className="mt-2">
            <Label for="deposit"><strong>Deposit</strong></Label>
            <Input className="curvedCorner" id="depsit" ref={this.deposit} type="number" name="deposit" value={this.state.deposit} onChange={this.onChange} placeholder="Deposit" />
          </FormGroup>
          <FormGroup className="mt-2">
            <Label for="interest"><strong>Interest</strong></Label>
            <Input className="curvedCorner" id="interest" ref={this.interestRate} type="number" name="interestRate" min="0" maxLength="10" step="0.01" value={this.state.interestRate} onChange={this.onChange} placeholder="Interest" />
          </FormGroup>
          <FormGroup className="mt-2">
            <Label for="yearsRepay"><strong>Mortgage Length</strong></Label>
            <Input className="curvedCorner" id="yearsRepay" ref={this.yearsRepay} type="number" name="yearsRepay" value={this.state.yearsRepay} onChange={this.onChange} placeholder="Repayment Period" />
          </FormGroup>
        </Form>
        <Row className="fullCenter mt-3">
          <h3>Monthly Rate:{this.state.monthlyRate}</h3>
        </Row>
      </Container>
    );
  }
}

export default Mortgage;
