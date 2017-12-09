import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-b811c.cloudfunctions.net';

class SignUpForm extends Component {
  state = { phone: '' };

  handleSubmit = async () => {
    try {
      const res1 = await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone });
      console.log(res1);
      const res2 = await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone });
      console.log(res2);
    } catch (error) {
      console.log(error);
    }
  }

  handleSubmit2() {
    axios
      .post(`${ROOT_URL}/createUser`, { phone: this.state.phone })
      .then(() => { 
        axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone });
      })
      .catch(error => console.log(error));
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
        <Button onPress={this.handleSubmit.bind(this)} title='Submit' />
      </View>
    );
  }
}

export default SignUpForm;
