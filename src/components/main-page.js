import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import Notification from './notification';
import { Card, ListItem } from 'react-native-elements';

export default class MainPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      notifications: [
        {
          title: 'Drink Water',
          message: 'Drink a glass of water or you are going to die of dehydration in five minutes',
          days: 'Mon, Tues',
          startTime: 9,
          endTime: 17,
          frequency: '45 minutes'
        }
      ]
    }
  }

  static navigationOptions = {
    title: "Don't Forget To...",
    headerStyle: {
      backgroundColor: 'lightblue',
      height: 72,
      paddingTop: 20
    },
    headerTitleStyle: {
      alignSelf: 'center'
    }
  }

  render() {
    let notifications = this.state.notifications.map((notification) => {
      <Notification info={notification} />
    })
    return (
      <View>
        <Text>This is a list of notifications</Text>
        <Card containerStyle={{padding: 0}} >
          {
            this.state.notifications.map((notification, i) => {
              return (
                <ListItem
                  key={i}
                  title={`${notification.title}  -  ${notification.frequency}`}
                  subtitle={notification.days}
                />
              );
            })
          }
        </Card>
        <Button 
          onPress={() => this.props.navigation.navigate('AddNotification')} 
          title="Add Notification"
        />
      </View>
    );
  }
}