import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/Home';
import SearchScreen from '../../screens/Search';
import DummyScreen from '../../screens/Dummy';

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="News" component={DummyScreen} />
      <Tab.Screen name="Notifications" component={DummyScreen} />
      <Tab.Screen name="Message" component={DummyScreen} />
    </Tab.Navigator>
  );
};

export default HomeTab;
