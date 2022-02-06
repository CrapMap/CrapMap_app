import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../slices/testSlice';

const Home = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.view}>
      <Text>Home!</Text>
      <Text>Current Count: {count}</Text>
      <View styles={styles.buttonsContainer}>
        <Pressable style={styles.button} onPress={() => dispatch(increment())}>
          <Text style={styles.text}>Increment +</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => dispatch(decrement())}>
          <Text style={styles.text}>Decrement -</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  view: {
    display: 'flex'
  },
  buttonsContainer: {
    justifyContent: 'space-between'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    width: 'auto'
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
