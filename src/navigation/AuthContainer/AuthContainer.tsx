import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from '../../screens/Auth/SignUp';
import LoginScreen from '../../screens/Auth/Login';
import CustomHeader from '../../components/shared/CustomHeader';

const Stack = createNativeStackNavigator();

const AuthContainer = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // eslint-disable-next-line react/no-unstable-nested-components
        header: (props: any) => <CustomHeader {...props} />,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthContainer;
