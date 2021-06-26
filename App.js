import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerNavigation from './navigations/drawer/drawerNavigation';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <DrawerNavigation />
  );
};

export default App;
