import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Settings from '../../screens/settings';
import HeaderMenuIcon from '../../component/headerMenuIcon';

const Stack = createStackNavigator();

const SettingStackScreen = ({ navigation }) => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#af7324'
            },
            headerTintColor: '#fff',
        }}>
            <Stack.Screen name="Settings" component={Settings} options={{
                headerLeft: () => (
                    <HeaderMenuIcon navigation={navigation} />
                )
            }}/>
        </Stack.Navigator>
    );
}

export default SettingStackScreen;