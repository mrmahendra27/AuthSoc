import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/home";
import HeaderMenuIcon from '../../component/headerMenuIcon';

const Stack = createStackNavigator();

const HomeStackScreen = ({navigation}) => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#009387'
            },
            headerTintColor: '#fff',
        }}>
            <Stack.Screen name="Home" component={Home} options={{
                headerLeft: () => (
                    <HeaderMenuIcon navigation={navigation}/>
                )
            }} />
        </Stack.Navigator>
    );
};

export default HomeStackScreen;