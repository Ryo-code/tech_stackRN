import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

/**** We'll have 2 reducers *****/
// 1) library reducer - has all the libraries
// 2) selection reducer - shows the currently selected library

export default combineReducers({
  libraries: LibraryReducer
});