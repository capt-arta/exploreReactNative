import React from 'react';
import {ScrollView, View} from 'react-native';
import CardItem from './pages/CardItem';
import Position from './pages/Position';
import DynamicProps from './pages/DynamicProps';
import DynamicState from './pages/DynamicState';
import ComValueComponent from './pages/ComValueComponent';
import CallAPIVanilla from './pages/CallAPIVanilla';
import CallAPIAxios from './pages/CallAPIAxios';
import SimpleUIComponent from './pages/SimpleUIComponent';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <CardItem /> */}
        {/* <Position /> */}
        {/* <DynamicProps /> */}
        {/* <DynamicState /> */}
        {/* <ComValueComponent /> */}
        {/* <CallAPIVanilla /> */}
        {/* <CallAPIAxios /> */}
        <SimpleUIComponent />
      </ScrollView>
    </View>
  );
};
export default App;
