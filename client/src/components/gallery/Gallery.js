import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import './Gallery.css';
import GalleryModal from './GalleryModal';
import { connect } from 'react-redux';
import { getImages, modalToggle } from '../../actions/galleryActions';
import PropTypes from 'prop-types';

class Gallery extends Component {
  state = {
    imgId: 0
  }

  onImgClick = (e) => {
    this.setState({ imgId: e.target.id });
    setTimeout(() => {
      this.props.modalToggle();
    }, 500);

  };

  componentDidMount() {
    this.props.getImages();
  };


  render() {
    const { galleryItems, modal } = this.props.galleryItem;
    return(
      <Container fluid className="gallery margin-top">
      <Row>
        {galleryItems.slice(0, 4).map(({ id, src, alt }, index) => (
          <Col key={id}>
            <div className="galleryContainer">
              <a  ><img onClick={ this.onImgClick } src={src} id={index} alt={alt} /></a>
            </div>
          </Col>
        ))}
      </Row>
      <Row>
        {galleryItems.slice(4, 8).map(({ id, src, alt }, index) => (
          <Col key={id}>
            <div className="galleryContainer">
              <a  ><img onClick={ this.onImgClick } src={src} id={index} alt={alt} /></a>
            </div>
          </Col>
        ))}
      </Row>
      { ReactDOM.createPortal(
        <GalleryModal galleryItems={galleryItems} modal={modal} modalToggle={this.props.modalToggle} imgId={this.state.imgId} />,
        document.getElementById('modal')
      )}

      </Container>
    );
  }
}

Gallery.propTypes = {
  getImages: PropTypes.func.isRequired,
  galleryItem: PropTypes.object.isRequired,
  modalToggle: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  galleryItem: state.galleryItem,
});

export default connect(mapStateToProps, { getImages, modalToggle })(Gallery);

//on version 2.0 add the clicked image to the start of the carousel on the modal
