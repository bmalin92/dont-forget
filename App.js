import React from 'react';
import { StackNavigator } from 'react-navigation';

import MainPage from './src/components/main-page';
import AddNotification from './src/components/add-notification';
import EditNotification from './src/components/edit-notification';

const RootNavigator = StackNavigator({
  Home: { screen: MainPage },
  AddNotification: { screen: AddNotification },
  EditNotification: { screen: EditNotification }
});

export default RootNavigator;
