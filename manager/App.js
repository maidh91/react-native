import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC0jdSo8qs9k5E7qWgTrT5VkIcSprWoGmk',
      authDomain: 'manager-54652.firebaseapp.com',
      databaseURL: 'https://manager-54652.firebaseio.com',
      projectId: 'manager-54652',
      storageBucket: '',
      messagingSenderId: '807792753320'
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
