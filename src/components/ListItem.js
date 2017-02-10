import React, { Component } from 'react';
import { 
  Text, 
  TouchableWithoutFeedback, 
  View,
  LayoutAnimation
} from 'react-native';
import { CardSection } from './common';
import * as actions from '../actions'; //this means you're gonna get everything that was exported from the actions.js file
import { connect } from 'react-redux';

class ListItem extends Component {
  componentWillUpdate(){
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;
    if (expanded){
      return (
        <CardSection>
          <Text style={styles.sectionStyle}> 
            {library.description} </Text>
        </CardSection>
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
    fontSize: 20,
    paddingLeft: 15
  },
  sectionStyle: {
    flex: 1,
    paddingLeft: 12,
    paddingRight: 8,
    fontSize: 16
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
}

export default connect(mapStateToProps, actions) (ListItem);


/* ~~~~~~~~~ Explanation of what happens when you press a Library ~~~~~~~~~

1) User clicks on the Library, which calls the Action Creator
2) Action Creator will return an Action, which gets sent to all reducers
  ╰─➤ So the Reducers are rerun
3) Some new application state will be assembled.
4) State is automatically sent to 'mapStateToProps' functions
  ╰─➤ This causes components to re-render
5) Our View updates on the screen
  ╰─➤ This is the component lifecycle method of "componentWillUpdate", which is
      why the "spring" animation is called right before the view update occurs.

~~~~~~~~~~~ ~~~~~~~~~~~ ~~~~~~~~~~~ ~~~~~~~~~~~ ~~~~~~~~~~~ ~~~~~~~~~~~ ~~~~~~~~~~ */