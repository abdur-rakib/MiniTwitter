import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainContainer from './src/navigation/MainContainer';
import {colors} from './src/theme/colors';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';
import store from './src/redux/store';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  }, []);

  const persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <StatusBar
            translucent
            backgroundColor={colors.extra_extra_light_gray}
            barStyle={'dark-content'}
          />
          <MainContainer />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
