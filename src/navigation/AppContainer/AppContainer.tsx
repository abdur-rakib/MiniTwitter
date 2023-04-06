/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import ProfileScreen from '../../screens/Profile';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeTab from '../HomeTab';
import CustomHeader from '../../components/shared/CustomHeader';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import {colors} from '../../theme/colors';
import {CustomDrawer} from '../../components/navigation';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DummyScreen from '../../screens/Dummy';
import {spacing} from '../../theme/spacing';
import {commonStyles} from '../../styles/commonstyles';

const Drawer = createDrawerNavigator();

const AppContainer = () => {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        drawerContentStyle: styles.drawerContentStyle,
        drawerItemStyle: styles.drawerItemStyle,
        drawerLabelStyle: [styles.drawerLabelStyle, commonStyles.boldText],
        drawerActiveBackgroundColor: colors.extra_extra_light_gray,
        drawerActiveTintColor: colors.black,
        drawerInactiveTintColor: colors.black,
      }}>
      <Drawer.Screen
        options={{
          header: () => <CustomHeader toggle />,
          drawerLabel: 'Home',
          drawerIcon: ({color}) => (
            <Octicons name="home" color={color} size={moderateScale(19)} />
          ),
        }}
        name="HomeTab"
        component={HomeTab}
      />
      <Drawer.Screen
        options={{
          header: () => <CustomHeader toggle />,
          drawerLabel: 'Profile',
          drawerIcon: ({color}) => (
            <Octicons name="person" color={color} size={moderateScale(19)} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
      <Drawer.Screen
        options={{
          header: () => <CustomHeader toggle />,
          drawerLabel: 'Twitter Blue',
          drawerIcon: () => (
            <FontAwesome
              name="twitter-square"
              color={colors.blue}
              size={moderateScale(19)}
            />
          ),
        }}
        name="TwitterBLue"
        component={DummyScreen}
      />
      <Drawer.Screen
        options={{
          header: () => <CustomHeader toggle />,
          drawerLabel: 'Topics',
          drawerIcon: ({color}) => (
            <MaterialCommunityIcons
              name="message-reply-text-outline"
              color={color}
              size={moderateScale(19)}
            />
          ),
        }}
        name="Topics"
        component={DummyScreen}
      />
      <Drawer.Screen
        options={{
          header: () => <CustomHeader toggle />,
          drawerLabel: 'Bookmarks',
          drawerIcon: ({color}) => (
            <Feather name="bookmark" color={color} size={moderateScale(19)} />
          ),
        }}
        name="Bookmarks"
        component={DummyScreen}
      />
      <Drawer.Screen
        options={{
          header: () => <CustomHeader toggle />,
          drawerLabel: 'Lists',
          drawerIcon: ({color}) => (
            <MaterialIcons
              name="list-alt"
              color={color}
              size={moderateScale(19)}
            />
          ),
        }}
        name="Lists"
        component={DummyScreen}
      />
      <Drawer.Screen
        options={{
          header: () => <CustomHeader toggle />,
          drawerLabel: 'Twitter Circle',
          drawerIcon: ({color}) => (
            <Octicons
              name="person-add"
              color={color}
              size={moderateScale(19)}
            />
          ),
        }}
        name="TwitterCircle"
        component={DummyScreen}
      />
    </Drawer.Navigator>
  );
};

const styles = ScaledSheet.create({
  drawerContentStyle: {
    backgroundColor: colors.extra_extra_light_gray,
  },
  drawerItemStyle: {
    marginHorizontal: 0,
    marginVertical: 0,
    backgroundColor: colors.extra_extra_light_gray,
    borderRadius: spacing[2],
  },
  drawerLabelStyle: {
    color: colors.black,
    marginLeft: -moderateScale(10),
    fontSize: spacing[14],
    lineHeight: spacing[18],
  },
});

export default AppContainer;
