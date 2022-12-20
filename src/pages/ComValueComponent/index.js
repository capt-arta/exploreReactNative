import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Cart from '../../components/Cart/index.js';
import Product from '../../components/Product';

const ComValueComponent = () => {
  const [qty, setQty] = useState(0);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>ComValueComponent</Text>
      <Cart qty={qty} />
      <Product onButtonPress={() => setQty(qty + 1)} />
    </View>
  );
};

export default ComValueComponent;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  title: {
    textAlign: 'center',
  },
});
