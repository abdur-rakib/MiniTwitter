import React from 'react';
import ProfileScreen from '../../screens/Profile';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeTab from '../HomeTab';
import CustomHeader from '../../components/shared/CustomHeader';

const Drawer = createDrawerNavigator();

const AppContainer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        options={{
          header: CustomHeader,
        }}
        name="HomeTab"
        component={HomeTab}
      />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

export default AppContainer;
