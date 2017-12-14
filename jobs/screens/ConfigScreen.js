import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ConfigScreen extends Component {
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

export default ConfigScreen;
