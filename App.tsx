import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainContainer from './src/navigation/MainContainer';
import {colors} from './src/theme/colors';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  }, []);

  // const persistor = persistStore(store);
  return (
    <SafeAreaProvider>
      <StatusBar
        translucent
        backgroundColor={colors.extra_extra_light_gray}
        barStyle={'dark-content'}
      />
      <MainContainer />
    </SafeAreaProvider>
  );
};

export default App;
