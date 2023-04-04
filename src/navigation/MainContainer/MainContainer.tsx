import {StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AuthContainer from '../AuthContainer';

const MainContainer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AuthContainer />
    </SafeAreaView>
  );
};

export default MainContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
