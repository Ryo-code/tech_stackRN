import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library) {
    return <ListItem library={library} />;
  }

  render() {
    console.log(this.props) //sure enough... the return statement below became props
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}


const mapStateToProps = state => {
  return { libraries: state.libraries}; //this will show up as props to LibraryList
};

export default connect(mapStateToProps) (LibraryList); 
// ^This syntax calls the function "connect" (which was imported 
//from the react-redux library), and it returns another function. 
//Then we immediately call that function with LibraryList.

/***** **** **** **** **** **** **** **** **** **** **** 
NOTE: It might seem intuitive to write:
    "connect(LibraryList, arg2, arg3...)"
...but that's not how it's done. Apparently this is better.
 **** **** **** **** **** **** **** **** **** **** *****/