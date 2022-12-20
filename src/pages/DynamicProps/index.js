import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Story = props => {
  const {title, imgSource} = props;

  return (
    <View style={styles.wrapper}>
      <Image source={{uri: imgSource}} style={styles.imgAvatar} />
      <Text style={{maxWidth: 72, textAlign: 'center', fontSize: 12}}>
        {title}
      </Text>
    </View>
  );
};

const DynamicProps = () => {
  return (
    <View>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row', gap: 10}}>
          <Story
            title={'aku'}
            imgSource={'https://thispersondoesnotexist.com/image'}
          />
          <Story
            title={'rindu'}
            imgSource={'https://thispersondoesnotexist.com/image'}
          />
          <Story
            title={'dia'}
            imgSource={'https://thispersondoesnotexist.com/image'}
          />
          <Story
            title={'aku'}
            imgSource={'https://thispersondoesnotexist.com/image'}
          />
          <Story
            title={'rindu'}
            imgSource={'https://thispersondoesnotexist.com/image'}
          />
          <Story
            title={'dia'}
            imgSource={'https://thispersondoesnotexist.com/image'}
          />
          <Story
            title={'aku'}
            imgSource={'https://thispersondoesnotexist.com/image'}
          />
          <Story
            title={'rindu'}
            imgSource={'https://thispersondoesnotexist.com/image'}
          />
          <Story
            title={'dia'}
            imgSource={'https://thispersondoesnotexist.com/image'}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default DynamicProps;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    padding: 8,
  },
  imgAvatar: {
    width: 72,
    height: 72,
    borderRadius: 72,
  },
});
