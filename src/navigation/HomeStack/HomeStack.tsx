/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeTab from '../HomeTab';
import CreateTweet from '../../screens/CreateTweet';
import CustomHeader from '../../components/shared/CustomHeader';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          header: () => <CustomHeader toggle />,
        }}
        name="HomeTab"
        component={HomeTab}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="CreateTweet"
        component={CreateTweet}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
