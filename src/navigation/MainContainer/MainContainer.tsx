import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {ScaledSheet} from 'react-native-size-matters';
import AppContainer from '../AppContainer';
import AuthContainer from '../AuthContainer';
import {useSelector} from 'react-redux';
import {userSelector} from '../../redux/user/userSlice';

const MainContainer = () => {
  const {isAuthenticated} = useSelector(userSelector);
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
