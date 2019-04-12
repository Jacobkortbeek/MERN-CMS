import uuid from 'uuid';
import { GET_IMAGES, MODAL_TOGGLE } from '../actions/types';

const initialState = {
  galleryItems: [
    { id: uuid(), src: 'https://images.unsplash.com/photo-1553557353-377c7e82f449?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80', alt: 'Gallery' },
    { id: uuid(), src: 'https://images.unsplash.com/photo-1553544923-37efbe6ff816?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80', alt: 'Gallery' },
    { id: uuid(), src: 'https://images.unsplash.com/photo-1553510518-cf2d1b2e4c27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80', alt: 'Gallery' },
    { id: uuid(), src: 'https://images.unsplash.com/photo-1553521756-74004ab1e8bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80', alt: 'Gallery' },
    { id: uuid(), src: 'https://images.unsplash.com/photo-1553538643-06979b16c978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80', alt: 'Gallery' },
    { id: uuid(), src: 'https://images.unsplash.com/photo-1553557353-377c7e82f449?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80', alt: 'Gallery' },
    { id: uuid(), src: 'https://images.unsplash.com/photo-1553538644-f3fa6f592bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80', alt: 'Gallery' },
    { id: uuid(), src: 'https://images.unsplash.com/photo-1553557353-377c7e82f449?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80', alt: 'Gallery' }
  ],
  modal: false,
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_IMAGES:
    return{
      ...state
    }
    case MODAL_TOGGLE:
      return{
        ...state,
        modal: !state.modal
      }
    default:
    return state;
  }
}
