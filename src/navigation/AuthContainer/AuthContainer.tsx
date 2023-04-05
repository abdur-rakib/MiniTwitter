import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from '../../screens/Auth/SignUp';
import LoginScreen from '../../screens/Auth/Login';

const Stack = createNativeStackNavigator();

const AuthContainer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signup" component={SignUpScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthContainer;
