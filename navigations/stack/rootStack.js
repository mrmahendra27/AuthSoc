import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Register from '../../screens/register';
import Splash from '../../screens/splash';
import Login from '../../screens/login';

const Stack = createStackNavigator();

const RootStackNavigator = () => {
    return  (
        <Stack.Navigator headerMode='none' initialRouteName="Splash">
            <Stack.Screen name="Splash" component={Splash}/>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="Login" component={Login}/>
        </Stack.Navigator>
    );
}

export default RootStackNavigator;