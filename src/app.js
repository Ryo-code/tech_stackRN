import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers'; //searches for "index.js" file automatically
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
  return (
    <Provider store={createStore(reducers)}> 
      {/* Provider can only have ONE child component */}
      <View>
        <Header headerText="Tech Stack"/>
        <LibraryList/>
      </View>
    </Provider>
  );
};

export default App;

{/* ~~~~~~~~~ ~~~~~~~~~~~  Explanation of the app so far  ~~~~~~~~~~~ ~~~~~~~~~

1) When the app first boots up, redux creates a new store using the "libraries" reducer. 
2) The instance the store is created, it runs the reducer one time. 
  ╰─➤ This yields a piece of state called "libraries: []" (an array of objects).
3) When it runs, the reducer returns that array of objects (each object 
represents an object that we'll render on the screen).
4) Once the store is created, it is passed as props to the Provider (where it'll 
  remain for the lifespan of this app).
  ╰─➤The Provider is a react component that aids in communication between react & redux.
5) The App component is rendered to the screen, which in turn renders the LibraryList component.
6) The instance the LibraryList component is about to render on the screen, the Connect 
  function activates, and reaches back into the Provider and grabs whatever the state is.
7) The Connect helper then calls 'mapStateToProps' and whatever object gets returned (ex. the state),
  will show up in LibraryList as props

~~~~~~~~~~~ ~~~~~~~~~~~ ~~~~~~~~~~~ ~~~~~~~~~~~ ~~~~~~~~~~~ ~~~~~~~~~~~ ~~~~~~~~~~ */}