import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AuthContainer from '../AuthContainer';
import {NavigationContainer} from '@react-navigation/native';
import {ScaledSheet} from 'react-native-size-matters';

const MainContainer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <AuthContainer />
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
