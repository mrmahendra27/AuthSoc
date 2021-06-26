import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Bookmarks from '../../screens/bookmarks';
import HeaderMenuIcon from '../../component/headerMenuIcon';

const Stack = createStackNavigator();

const BookmarkStackScreen = ({ navigation }) => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#af7324'
            },
            headerTintColor: '#fff',
        }}>
            <Stack.Screen name="Bookmarks" component={Bookmarks} options={{
                headerLeft: () => (
                    <HeaderMenuIcon navigation={navigation} />
                )
            }}/>
        </Stack.Navigator>
    );
}

export default BookmarkStackScreen;