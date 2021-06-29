import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStackScreen from '../stack/homeStack';
import AboutStackScreen from '../stack/aboutStack';
import SettingStackScreen from '../stack/settingsStack';
import ProfileStackScreen from '../stack/profileStack';
import Notifications from '../../screens/notifications';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={HomeStackScreen} options={{
                tabBarLabel: 'Home',
                tabBarColor: '#009387',
                tabBarIcon: ({ color }) => (
                    <Icon name="home" color={color} size={26} />
                ),
            }} />
            <Tab.Screen name="Notification" component={Notifications} options={{
                tabBarLabel: 'Notifications',
                tabBarColor: '#1f65ff',
                tabBarIcon: ({ color }) => (
                    <Icon name="bell" color={color} size={26} />
                ),
            }} />
            <Tab.Screen name="Profile" component={ProfileStackScreen} options={{
                tabBarLabel: 'Profile',
                tabBarColor: '#694fad',
                tabBarIcon: ({ color }) => (
                    <Icon name="account" color={color} size={26} />
                ),
            }} />
            <Tab.Screen name="Settings" component={SettingStackScreen} options={{
                tabBarLabel: 'Settings',
                tabBarColor: '#d02860',
                tabBarIcon: ({ color }) => (
                    <Icon name="cog-outline" color={color} size={26} />
                ),
            }} />
        </Tab.Navigator>
    );
}

export default TabNavigator;