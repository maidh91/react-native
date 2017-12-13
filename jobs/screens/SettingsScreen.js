import React, { Component } from 'react';
import { View, Text } from 'react-native';

class SettingsScreen extends Component {
  static navigationOptions = {
    title: 'app.json',
  };
  
  render() {
    return (
      <View>
        <Text>SettingsScreen</Text>
      </View>
    );
  }
}

export default SettingsScreen;
