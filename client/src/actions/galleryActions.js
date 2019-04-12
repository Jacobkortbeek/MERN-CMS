import { GET_IMAGES, MODAL_TOGGLE } from './types';

export const getImages = () => {
  return {
    type: GET_IMAGES
  };
};

export const modalToggle = () => {
  return {
    type: MODAL_TOGGLE
  };
};
