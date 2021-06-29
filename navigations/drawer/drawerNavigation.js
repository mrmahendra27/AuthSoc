import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStackScreen from '../stack/homeStack';
import DrawerContentItem from './drawerContent';
import BookmarkStackScreen from '../stack/bookmarkStack';
import SettingStackScreen from '../stack/settingsStack';
import SupportStackScreen from '../stack/supportStack';
import AboutStackScreen from '../stack/aboutStack';
import ProfileStackScreen from '../stack/profileStack';
import RootStackNavigator from '../stack/rootStack';
import TabNavigator from '../tab/TabNavigationContainer';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <NavigationContainer>
            {/* <RootStackNavigator /> */}
            <Drawer.Navigator drawerType='slide' drawerContent={(props) => <DrawerContentItem {...props} />}>
                <Drawer.Screen name="Home" component={TabNavigator} />
                <Drawer.Screen name="Profile" component={ProfileStackScreen}/>
                <Drawer.Screen name="Bookmarks" component={BookmarkStackScreen}/>
                <Drawer.Screen name="Settings" component={SettingStackScreen}/>
                <Drawer.Screen name="Support" component={SupportStackScreen}/>
                <Drawer.Screen name="About" component={AboutStackScreen}/>
            </Drawer.Navigator>
            {/* <TabNavigator /> */}
        </NavigationContainer>
    );
};

export default DrawerNavigation;
