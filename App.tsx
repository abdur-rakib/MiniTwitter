import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainContainer from './src/navigation/MainContainer';
import {colors} from './src/theme/colors';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaProvider>
      <MainContainer />
      <StatusBar
        backgroundColor={colors.extra_extra_light_gray}
        barStyle={'dark-content'}
      />
    </SafeAreaProvider>
  );
};

export default App;
