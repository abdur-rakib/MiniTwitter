/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FollowingScreen from '../../screens/Following';
import UsersScreen from '../../screens/Users';
import SecondaryHeader from '../../components/shared/SecondaryHeader';

const Stack = createNativeStackNavigator();

const FollowStack = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        options={{
          header: props => (
            <SecondaryHeader backTitle="Following" right={true} {...props} />
          ),
        }}
        name="Following"
        component={FollowingScreen}
      />
      <Stack.Screen
        options={{
          header: props => (
            <SecondaryHeader backTitle="Followers" right={true} {...props} />
          ),
        }}
        name="Follower"
        component={FollowingScreen}
      />
      <Stack.Screen
        options={{
          header: props => <SecondaryHeader backTitle="Users" {...props} />,
        }}
        name="Users"
        component={UsersScreen}
      />
    </Stack.Navigator>
  );
};

export default FollowStack;
