import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';

const ROOT_URL = 'https://us-central1-one-time-password-b811c.cloudfunctions.net';

class SignInForm extends Component {
  state = { phone: '', code: '' };

  handleSubmit = async () => {
    try {
      const res = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, { 
        phone: this.state.phone, code: this.state.code
      });
      console.log(res);
      
      const { data } = res;
      console.log(data);

      firebase.auth().signInWithCustomToken(data.token);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <View style={{ marginBottom: 10 }}>
        <View>
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput 
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </View>
        
        <View>
          <FormLabel>Enter Code</FormLabel>
          <FormInput 
            value={this.state.code}
            onChangeText={code => this.setState({ code })}
          />
        </View>

        <Button onPress={this.handleSubmit.bind(this)} title='Submit' />
      </View>
    );
  }
}

export default SignInForm;
