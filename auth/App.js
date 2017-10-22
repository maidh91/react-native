import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends Component {
  state = { loggedIn: false }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBWhgf59jpurJ2hZm1cJIkyu9B-N4Zgleg',
      authDomain: 'auth-c3e01.firebaseapp.com',
      databaseURL: 'https://auth-c3e01.firebaseio.com',
      projectId: 'auth-c3e01',
      storageBucket: 'auth-c3e01.appspot.com',
      messagingSenderId: '995038714197'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={{ height: 50 }}>
            <Button onPress={() => firebase.auth().signOut()}>
              Logout
            </Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;      
    }    
  }

  render() {
    return (
      <View>
        <Header headerText='Auth' />
        {this.renderContent()}
      </View>
    );
  }
}
