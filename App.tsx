import {Text} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <Text>App</Text>
    </SafeAreaProvider>
  );
};

export default App;
