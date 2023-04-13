/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/Home';
import DummyScreen from '../../screens/Dummy';
import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {spacing} from '../../theme/spacing';
import SearchScreen from '../../screens/Search';

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarShowLabel: false,
        headerShadowVisible: false,
        tabBarActiveTintColor: colors.black,
        tabBarInactiveTintColor: colors.black,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={size}
            />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={focused ? 'md-search' : 'search-outline'}
              color={color}
              size={size}
            />
          ),
        }}
        name="Search"
        component={SearchScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={focused ? 'ios-mic-sharp' : 'ios-mic-outline'}
              color={color}
              size={size}
            />
          ),
        }}
        name="News"
        component={DummyScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={
                focused
                  ? 'ios-notifications-sharp'
                  : 'ios-notifications-outline'
              }
              color={color}
              size={size}
            />
          ),
        }}
        name="Notifications"
        component={DummyScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={focused ? 'ios-mail' : 'mail-outline'}
              color={color}
              size={size}
            />
          ),
        }}
        name="Message"
        component={DummyScreen}
      />
    </Tab.Navigator>
  );
};

const styles = ScaledSheet.create({
  tabBarStyle: {
    backgroundColor: colors.extra_extra_light_gray,
    borderTopWidth: 0.8,
    borderTopColor: colors.extra_light_gray,
    elevation: 0,
    height: spacing[50],
    paddingBottom: 0,
  },
});

export default HomeTab;
