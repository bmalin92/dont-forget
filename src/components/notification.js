import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';

export default class Notification extends React.Component {
  render() {
    return (
      <Card containerStyle={{padding: 0}} >
        <ListItem 
          title={this.props.info.title}
        />
      </Card>
    );
  }
}