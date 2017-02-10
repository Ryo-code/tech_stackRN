import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';
import * as actions from '../actions'; //this means you're gonna get everything that was exported from the actions.js file
import { connect } from 'react-redux';

class ListItem extends Component {
  renderDescription() {
    const { library, selectedLibraryId } = this.props;
    if (library.id === selectedLibraryId){
      return (
        <Text> {library.description} </Text>
      );
    }
  }

  render(){
    const { titleStyle } = styles;
    const { id, title } = this.props.library;


    return (
      <TouchableWithoutFeedback 
        onPress={() => this.props.selectLibrary(id)}
      >

        <View>
        <CardSection>
          <Text style={titleStyle}>
            {title}
          </Text>
        </CardSection>
        {this.renderDescription()}
        </View>

      </TouchableWithoutFeedback>
    )
  }
}

styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

const mapStateToProps = state => {
  return { selectedLibraryId: state.selectedLibraryId}
}

export default connect(mapStateToProps, actions) (ListItem);