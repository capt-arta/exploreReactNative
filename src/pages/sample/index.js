import React from 'react';
import {Image, Text, TextInputComponent, View} from 'react-native';

const Sample = () => {
  return (
    <View style={{margin: 20}}>
      <Text>Assalamualaikum</Text>
      <Gambar />
      <TextInputComponent
        style={{borderWidth: 1, borderRadius: 20, paddingHorizontal: 14}}
      />
    </View>
  );
};

const Gambar = props => {
  return (
    <View>
      <Image
        source={{
          uri: 'http://thispersondoesnotexist.com/image',
        }}
        style={{width: 100, height: 100}}
      />
      <Text>Gambar Besar</Text>
    </View>
  );
};

export default Sample;
