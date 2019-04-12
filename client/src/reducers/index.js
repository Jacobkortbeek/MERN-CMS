import { combineReducers } from 'redux';
import galleryReducer from './galleryReducer';
import homeContentReducer from  './homeContentReducer';
import aboutContentReducer from  './aboutContentReducer';
import contactContentReducer from './contactContentReducer';

export default combineReducers({
  galleryItem: galleryReducer,
  homeContent: homeContentReducer,
  aboutContent: aboutContentReducer,
  contactContent: contactContentReducer
});
