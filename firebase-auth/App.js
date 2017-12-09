import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAAbAMIF1-hH2pczKsPWc-2JCJrbrCsfRw',
      authDomain: 'one-time-password-b811c.firebaseapp.com',
      databaseURL: 'https://one-time-password-b811c.firebaseio.com',
      projectId: 'one-time-password-b811c',
      storageBucket: '',
      messagingSenderId: '906526596282'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
