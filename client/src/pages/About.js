import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAboutContent } from './../actions/aboutContentActions';
import PropTypes from 'prop-types';


import PageHeader from '../components/PageHeader'
import ImgText from '../components/img-text/ImgText'
import Text from '../components/Text';
import Skills from '../components/skills/Skills'


class About extends Component {
  componentDidMount() {
    this.props.getAboutContent();
  }
  render() {
    const { aboutContent } = this.props.aboutContent;
    return(
      <div>
        <PageHeader header={aboutContent.header} />
        <ImgText about={aboutContent.about}/>
        <Text text={aboutContent.textSection} />
        <Skills />
      </div>
    )
  }
}

About.propTypes = {
  getAboutContent: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  aboutContent: state.aboutContent
});

export default connect(mapStateToProps, {getAboutContent})(About);
