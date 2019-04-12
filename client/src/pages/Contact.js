import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getContactContent } from './../actions/contactContentActions';
import PropTypes from 'prop-types';

import PageHeader from './../components/PageHeader';
import ContactInfo from './../components/ContactInfo';
import ContactForm from './../components/ContactForm';

class Contact extends Component {

  componentDidMount() {
    this.props.getContactContent();
  }

  render() {
    const { contactContent } = this.props.contactContent;
    return(
      <div>
        <PageHeader header={contactContent.header} />
        <ContactInfo info={contactContent.contactInfo } />
        <ContactForm />
      </div>
    );
  }
}

Contact.propTypes = {
  getContactContent: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  contactContent: state.contactContent
});

export default connect(mapStateToProps, { getContactContent })(Contact);
