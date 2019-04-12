import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHomeContent } from './../actions/homeContentActions';
import PropTypes from 'prop-types';
import Hero from '../components/hero/Hero'
import ImgText from  '../components/img-text/ImgText';
import Mortgage from '../components/mortgage-calc/Mortgage';
import Gallery from '../components/gallery/Gallery';

class Home extends Component {

  componentDidMount() {
    this.props.getHomeContent();
  };

  render() {
    const { homeContent } = this.props.homeContent;
    return(
      <div>
        <Hero hero={homeContent.hero} />
        <ImgText about={homeContent.about} />
        <Mortgage mortgage={homeContent.mortgageCalculator} />
      <Gallery gallery={homeContent.gallery} />
      </div>
    )
  }
}

Home.propTypes ={
  getHomeContent: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  homeContent: state.homeContent
});

export default connect(mapStateToProps, { getHomeContent })(Home);
