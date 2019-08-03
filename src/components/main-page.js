import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import Notification from './notification';
import { Card, ListItem } from 'react-native-elements';
import Expo from 'expo'

export default class MainPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      notifications: [
        {
          title: 'Drink Water',
          message: 'Drink a glass of water or you are going to die of dehydration in five minutes',
          days: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
          startTime: 9,
          endTime: 17,
          frequency: 'Every 45 minutes'
        }
      ]
    }
  }

  componentDidMount() {

    Expo.Permissions.askAsync(Expo.Permissions.NOTIFICATIONS).then(response => {
      if(response.status === 'granted') {
        const localNotification = {
          title: 'Dont Forget',
          body: 'This is a test notification', // (string) — body text of the notification.
          ios: { // (optional) (object) — notification configuration specific to iOS.
            sound: true // (optional) (boolean) — if true, play a sound. Default: false.
          },
          android: // (optional) (object) — notification configuration specific to Android.
          {
            sound: true, // (optional) (boolean) — if true, play a sound. Default: false.
            //icon (optional) (string) — URL of icon to display in notification drawer.
            //color (optional) (string) — color of the notification icon in notification drawer.
            priority: 'high', // (optional) (min | low | high | max) — android may present notifications according to the priority, for example a high priority notification will likely to be shown as a heads-up notification.
            sticky: false, // (optional) (boolean) — if true, the notification will be sticky and not dismissable by user. The notification must be programmatically dismissed. Default: false.
            vibrate: true // (optional) (boolean or array) — if true, vibrate the device. An array can be supplied to specify the vibration pattern, e.g. - [ 0, 500 ].
            // link (optional) (string) — external link to open when notification is selected.
          }
        };

        let time = new Date();
        time.setSeconds(time.getSeconds() + 10);
        const schedulingOptions = {
            time, // (date or number) — A Date object representing when to fire the notification or a number in Unix epoch time. Example: (new Date()).getTime() + 1000 is one second from now.
          };

        Expo.Notifications.scheduleLocalNotificationAsync(localNotification, schedulingOptions);
      }
    })
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
        <Text>Test: This is a list of notifications</Text>
        <Card containerStyle={{padding: 0}} >
          {
            this.state.notifications.map((notification, i) => {
              return (
                <ListItem
                  key={i}
                  title={`${notification.title}  -  ${notification.frequency}`}
                  subtitle={notification.days.join(" - ")}
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
