import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FollowingScreen from '../../screens/Following';
import UsersScreen from '../../screens/Users';

const Stack = createNativeStackNavigator();

const FollowingStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Following" component={FollowingScreen} />
      <Stack.Screen name="Users" component={UsersScreen} />
    </Stack.Navigator>
  );
};

export default FollowingStack;
