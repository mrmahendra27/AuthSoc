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

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerType='slide' drawerContent={(props) => <DrawerContentItem {...props} />}>
                <Drawer.Screen name="Home" component={HomeStackScreen} />
                <Drawer.Screen name="Profile" component={ProfileStackScreen}/>
                <Drawer.Screen name="Bookmarks" component={BookmarkStackScreen}/>
                <Drawer.Screen name="Settings" component={SettingStackScreen}/>
                <Drawer.Screen name="Support" component={SupportStackScreen}/>
                <Drawer.Screen name="About" component={AboutStackScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default DrawerNavigation;
