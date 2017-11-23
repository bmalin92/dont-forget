import React, { Component } from 'react';

export default class EditNotification extends Component {
  static navigationOptions = {
    title: 'EditNotification'
  }
  render() {
    return (
      <View>
        <Text>Edit a notification</Text>
        <Button 
          onPress={() => this.props.navigation.navigate('Home')} 
          title="Cancel"
        />
      </View>
    );
  }
}