import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View />
      </Provider>
    );
  }
}
