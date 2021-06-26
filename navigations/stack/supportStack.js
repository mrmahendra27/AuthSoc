import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Support from '../../screens/support';
import HeaderMenuIcon from '../../component/headerMenuIcon';

const Stack = createStackNavigator();

const SupportStackScreen = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName="Support" screenOptions={{
            headerStyle: {
                backgroundColor: '#af7324'
            },
            headerTintColor: '#fff',
        }}>
            <Stack.Screen name="Support" component={Support} options={{
                headerLeft: () => (
                    <HeaderMenuIcon navigation={navigation} />
                )
            }}/>
        </Stack.Navigator>
    );
}

export default SupportStackScreen;