import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
  render() {
    return;
  }
}

export default connect() (LibraryList); 
// ^This syntax calls the function "connect" (which was imported 
//from the react-redux library), and it returns another function. 
//Then we immediately call that function with LibraryList.

/***** **** **** **** **** **** **** **** **** **** **** 
NOTE: It might seem intuitive to write:
    "connect(LibraryList, arg2, arg3...)"
...but that's not how it's done. Apparently this is better.
 **** **** **** **** **** **** **** **** **** **** *****/