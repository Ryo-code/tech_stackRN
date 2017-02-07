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