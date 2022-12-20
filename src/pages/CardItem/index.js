import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CardItem = () => {
  return (
    <View style={styles.cardItemContainer}>
      <Image
        source={{
          uri: 'https://api.time.com/wp-content/uploads/2021/03/nft-art-1.jpg',
        }}
        style={{width: 200, height: 100}}
      />
      <Text style={styles.cardItemTitle}>Everydays: The First 5000 Days</Text>
      <View style={styles.cardItemButtonView}>
        <Text style={styles.cardItemButtonViewText}>View More</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardItemContainer: {
    padding: 18,
    margin: 12,
    backgroundColor: '#f2f2f2',
    width: 236,
    borderRadius: 8,
  },
  cardItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 8,
  },
  cardItemButtonView: {
    padding: 8,
    marginTop: 16,
    borderRadius: 8,
    backgroundColor: '#1b7ced',
  },
  cardItemButtonViewText: {
    color: 'white',
    fontWeight: 'medium',
    textAlign: 'center',
  },
});

export default CardItem;
