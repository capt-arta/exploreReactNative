import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <View>
      <Text>{number}</Text>
      <Button title="Tambah" onPress={() => setNumber(number + 1)} />
    </View>
  );
};

const DynamicState = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>DynamicState</Text>
      <Counter />
      <Counter />
    </View>
  );
};

export default DynamicState;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  title: {
    textAlign: 'center',
  },
});
