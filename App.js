/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {Provider} from 'react-redux';
import React from 'react';
import Main from './src/index';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {store} from './src/store/store';
const App = () => {
  return (
    <SafeAreaView>
      <Provider store={store}>
        <View>
          <Text>hello</Text>
          <Main />
        </View>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
