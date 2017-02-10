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
      <View style={{flex: 1}}>
        <Header headerText="Tech Stack"/>
        <LibraryList/>
      </View>
    </Provider>
  );
};

export default App;


/* ~~~~~~~~~~~ ~~~~~~~~~~~~~  Wrap-up explanation of the app   ~~~~~~~~~~~~~ ~~~~~~~~~~~

A) When the app first boots up, the Provider tag creates a new redux Store.
  ╰─➤The Provider helps react & redux communicate (だからreact-redux libraryから来た)
B) Then two different Reducers (LibraryReducer & SelectionReducer) are created.
  ╰─➤The two Reducers were connected through the combineReducers helper (which 
  came from the redux library we imported, in the reducers/index.js file)
C) The Reducers' keys determine how the application's 'state' object looks.
D) Inside SelectionReducer (as 例)--> A single switch statement will switch over our
  Action's 'type', and decide whether or not we should respond to that Action.
  ╰─➤Action Creator has 1 job: to create an Action. 
  ╰────➤ Its 'type' property is like the instruction/command to our Reducers.
E) Whenever our app's state changes, our 'mapStateToProps' function reruns, and
  passes in a new set of props to our component (ex. the Action Creator).
  ╰─➤This causes the component to re-render.
  ╰────➤ That's why when you click a library, it actually does re-render.

~~~~~~~~~~~ ~~~~~~~~~~~ ~~~~~~~~~~~ ~~~~~~~~~~~ ~~~~~~~~~~~ ~~~~~~~~~~~ ~~~~~~~~~~ */
