import React from 'react';
import { StyleSheet, Button, Text, View, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import SettingScreen from './History';
import History from './History';

export default class App extends React.Component {

  render() {
    return <MyApp />;
  }
}

const MyApp = StackNavigator({
  Home: { screen: HomeScreen },
  History: { screen: History }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
