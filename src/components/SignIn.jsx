import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SignIn = ({ navigation }) => {
  return (
    <View>
      <Text>Sign In</Text>
      <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>Don't have an account? Click here to sign up</Text>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  link: {
    color: 'blue'
  }
});
