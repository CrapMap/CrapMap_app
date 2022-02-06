import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';

const SignIn = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Sign In</Text>
      <View>
        <TextInput onChangeText={setUsername} style={styles.input} value={username} />
        <TextInput onChangeText={setPassword} style={styles.input} value={password} />
      </View>
      <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>Don't have an account? Click here to sign up</Text>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  link: {
    color: 'blue'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
});
