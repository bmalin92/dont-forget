import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Picker, AppState } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  picker: {
    width: 200,
    justifyContent: 'center'
  }
});

export default class AddNotification extends Component {
  constructor(props) {
    super(props);

    this.handleAppStateChange = this.handleAppStateChange.bind(this);
    this.state = {
      minutes: 5
    }
  }

  static navigationOptions = {
    title: 'AddNotification'
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange(appState) {
    if (appState === 'background') {
      // schedule a notification in the background
      console.log('app is in background', this.state.minutes);
    }
  }

  render() {
    return (
      <View>
        <Text>Add a notification</Text>
        <Picker
          style={styles.picker}
          selectedValue={this.state.minutes}
          onValueChange={(minutes) => this.setState({ minutes })}
        >
          <Picker.Item label="30 minutes" value={30} />
          <Picker.Item label="45 minutes" value={45} />
          <Picker.Item label="1 hour" value={60} />
          <Picker.Item label="1 hour, 30 minutes" value={90} />
          <Picker.Item label="2 hours" value={120} />
        </Picker>
        <Button 
          onPress={() => this.props.navigation.navigate('Home')} 
          title="Cancel"
        />
      </View>
    );
  }
}