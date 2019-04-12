import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
 } from 'reactstrap';

class GalleryModal extends Component {

  constructor(props) {
   super(props);
   this.state = { activeIndex: 0 };
   this.next = this.next.bind(this);
   this.previous = this.previous.bind(this);
   this.goToIndex = this.goToIndex.bind(this);
   this.onExiting = this.onExiting.bind(this);
   this.onExited = this.onExited.bind(this);
 }

 onExiting() {
   this.animating = true;
 }

 onExited() {
   this.animating = false;
 }

 next() {
   if (this.animating) return;
   const nextIndex = this.state.activeIndex === this.props.galleryItems.length - 1 ? 0 : this.state.activeIndex + 1;
   this.setState({ activeIndex: nextIndex });
 }

 previous() {
   if (this.animating) return;
   const nextIndex = this.state.activeIndex === 0 ? this.props.galleryItems.length - 1 : this.state.activeIndex - 1;
   this.setState({ activeIndex: nextIndex });
 }

 goToIndex(newIndex) {
   if (this.animating) return;
   this.setState({ activeIndex: newIndex });
 }

  render() {

    const { activeIndex } = this.state;

    const slides = this.props.galleryItems.map(({id, src, alt}) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={id}
        >
          <img src={src} alt={alt} />
        </CarouselItem>
      );
    });

    return (<div>
      <Modal isOpen={this.props.modal} toggle={this.props.modalToggle} className={this.props.className}>
        <ModalHeader toggle={this.props.modalToggle}>Modal title</ModalHeader>
        <ModalBody>
          <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            <CarouselIndicators items={this.props.galleryItems} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
          </Carousel>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.props.modalToggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={this.props.modalToggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>);
  }
}

export default GalleryModal;
