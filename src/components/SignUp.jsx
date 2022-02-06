import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View>
      <Text>Sign Up</Text>
      <View>
        <TextInput onChangeText={setUsername} style={styles.input} value={username} />
        <TextInput onChangeText={setPassword} style={styles.input} value={password} />
        <TextInput onChangeText={setEmail} style={styles.input} value={email} />
        <TextInput onChangeText={setFirstName} style={styles.input} value={firstName} />
        <TextInput onChangeText={setLastName} style={styles.input} value={lastName} />        
      </View>
      <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>Don't have an account? Click here to sign up</Text>
    </View>
  );
};

export default SignUp;

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
