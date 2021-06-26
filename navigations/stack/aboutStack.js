import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../../screens/about';
import HeaderMenuIcon from '../../component/headerMenuIcon';

const Stack = createStackNavigator();

const AboutStackScreen = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName="About" screenOptions={{
            headerStyle: {
                backgroundColor: '#af7324'
            },
            headerTintColor: '#fff',
        }}>
            <Stack.Screen name="About" component={About} options={{
                headerLeft: () => (
                    <HeaderMenuIcon navigation={navigation} />
                )
            }}/>
        </Stack.Navigator>
    );
}

export default AboutStackScreen;