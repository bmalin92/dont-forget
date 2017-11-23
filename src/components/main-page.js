import React from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import NotificationCategory from './notification-category';

export default class MainPage extends Component {
  static navigationOptions = {
    title: 'Home'
  }
  render() {
    return (
      <View>
        <Text>This is a list of notifications</Text>
        <NotificationCategory />
        <Button 
          onPress={() => this.props.navigation.navigate('AddNotification')} 
          title="Add Notification"
        />
      </View>
    );
  }
}