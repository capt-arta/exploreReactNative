import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import shoppingCart from '../../assets/shopping.png';

const Position = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.cartWrapper}>
        <Image source={shoppingCart} style={styles.iconCart} />
        <Text style={styles.cartBadge}>99</Text>
      </View>
      <Text style={styles.cartText}>Ur Cart Shop</Text>
    </View>
  );
};

export default Position;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    alignItems: 'center',
  },
  cartWrapper: {
    borderWidth: 1,
    borderColor: 'grey',
    height: 72,
    width: 72,
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  iconCart: {
    width: 50,
    height: 50,
    borderWidth: 1,
  },
  cartText: {
    fontSize: 16,
    marginTop: 12,
  },
  cartBadge: {
    fontSize: 12,
    color: '#ffffff',
    backgroundColor: '#1E90FF',
    padding: 4,
    width: 24,
    height: 24,
    borderRadius: 12,
    textAlign: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
