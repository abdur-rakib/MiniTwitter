import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainContainer from './src/navigation/MainContainer';

const App = () => {
  return (
    <SafeAreaProvider>
      <MainContainer />
      <StatusBar backgroundColor="#FFF" barStyle={'dark-content'} />
    </SafeAreaProvider>
  );
};

export default App;
