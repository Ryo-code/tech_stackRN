export const selectLibrary = (libraryID) => {
  return {
    type: 'select_library',
    payload: libraryID
  };
};

//Action Creators are functions that return Actions.
//Actions are objects that have a type property.
//Type properties tell the reducers to update in a specific way.
//...In our case, that we wanna select a new book (select_library)

