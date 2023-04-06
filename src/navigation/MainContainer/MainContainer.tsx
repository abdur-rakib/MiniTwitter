import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {ScaledSheet} from 'react-native-size-matters';
import AppContainer from '../AppContainer';
import AuthContainer from '../AuthContainer';
import {storage} from '../../services/storageService';

const MainContainer = () => {
  const isAuthenticated = storage.getBoolean('isAuthenticated');
  console.log(
    '🚀 ~ file: MainContainer.tsx:11 ~ MainContainer ~ isAuthenticated:',
    isAuthenticated,
  );
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        {isAuthenticated ? <AppContainer /> : <AuthContainer />}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default MainContainer;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
});
