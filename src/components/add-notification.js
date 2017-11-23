import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

export default class AddNotification extends Component {
  static navigationOptions = {
    title: 'AddNotification'
  }
  render() {
    return (
      <View>
        <Text>Add a notification</Text>
        <Button 
          onPress={() => this.props.navigation.navigate('Home')} 
          title="Cancel"
        />
      </View>
    );
  }
}