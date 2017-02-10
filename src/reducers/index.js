import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

/**** We'll have 2 reducers *****/
// 1) library reducer - has all the libraries
// 2) selection reducer - shows the currently selected library

export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});
//whatever key you provide for these reducers 
//is how it'll show up in the state object