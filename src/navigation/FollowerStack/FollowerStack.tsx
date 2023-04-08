import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UsersScreen from '../../screens/Users';
import FollowerScreen from '../../screens/Follower';

const Stack = createNativeStackNavigator();

const FollowerStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Following" component={FollowerScreen} />
      <Stack.Screen name="Users" component={UsersScreen} />
    </Stack.Navigator>
  );
};

export default FollowerStack;
