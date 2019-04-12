import { GET_ABOUT_CONTENT } from '../actions/types';

const initialState = {
  aboutContent: {
    header: {
      title: 'My MERN CMS',
    },
    about: {
      title: 'About Me Page',
      paragraph: 'Lorem ipsum dolor amet affogato semiotics brunch hammock slow-carb. Disrupt flannel humblebrag offal etsy hella. Neutra dreamcatcher heirloom cred. Austin cornhole tote bag man bun ennui pabst disrupt live-edge cronut banh mi. Raw denim man braid la croix messenger bag, subway tile next level typewriter helvetica unicorn mustache. Poutine tofu bespoke put a bird on it, slow-carb lumbersexual squid pitchfork. Beard enamel pin jean shorts pitchfork post-ironic. Lorem ipsum dolor amet affogato semiotics brunch hammock slow-carb. Disrupt flannel humblebrag offal etsy hella.'
    },
    textSection: {
      title: 'this is the title for the text area',
      paragraph: 'this is the small paragraph'
    }
  }
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ABOUT_CONTENT:
    return{
      ...state
    }
    default:
    return state;
  }
}
