import { GET_CONTACT_CONTENT } from '../actions/types';

const initialState = {
  contactContent: {
    header: {
      title: 'this is the contact page',
    },
    contactInfo: {
      infoOne: 'Info One',
      infoTwo: 'Info Two',
      infoThree: 'Info Three',
      infoFour: 'Info Four'
    }
  }
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_CONTACT_CONTENT:
    return{
      ...state
    }
    default:
    return state;
  }
}
