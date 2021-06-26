import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../../screens/profile';
import HeaderMenuIcon from '../../component/headerMenuIcon';

const Stack = createStackNavigator();

const ProfileStackScreen = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName="Profile" screenOptions={{
            headerStyle: {
                backgroundColor: '#af7324'
            },
            headerTintColor: '#fff',
        }}>
            <Stack.Screen name="Profile" component={Profile} options={{
                headerLeft: () => (
                    <HeaderMenuIcon navigation={navigation} />
                )
            }}/>
        </Stack.Navigator>
    );
}

export default ProfileStackScreen;