import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {ScaledSheet} from 'react-native-size-matters';
import AppContainer from '../AppContainer';
import AuthContainer from '../AuthContainer';
import {colors} from '../../theme/colors';
import {useSelector} from 'react-redux';
import {authSelector} from '../../redux/auth/authSlice';

const MainContainer = () => {
  const {isAuthenticated} = useSelector(authSelector);
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
    backgroundColor: colors.extra_extra_light_gray,
  },
});
