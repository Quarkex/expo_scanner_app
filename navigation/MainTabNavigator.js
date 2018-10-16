import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import FeedbackScreen from '../screens/FeedbackScreen';
import LogInScreen from '../screens/LogInScreen';
import ScannerScreen from '../screens/ScannerScreen';
import SelectorScreen from '../screens/SelectorScreen';

const FeedbackStack = createStackNavigator({
  Feedback: FeedbackScreen,
});

FeedbackStack.navigationOptions = {
  tabBarLabel: 'Feedback',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-document'
      }
    />
  ),
};

const LogInStack = createStackNavigator({
  LogIn: LogInScreen,
});

LogInStack.navigationOptions = {
  tabBarLabel: 'Log In',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-person'
      }
    />
  ),
};

const ScannerStack = createStackNavigator({
  Scanner: ScannerScreen,
});

ScannerStack.navigationOptions = {
  tabBarLabel: 'Scanner',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-qr-scanner'
      }
    />
  ),
};

const SelectorStack = createStackNavigator({
  Selector: SelectorScreen,
});

SelectorStack.navigationOptions = {
  tabBarLabel: 'Selector',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-list'
      }
    />
  ),
};

export default createBottomTabNavigator({
  LogInStack,
  SelectorStack,
  ScannerStack,
  FeedbackStack,
});
