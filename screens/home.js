import React from 'react';
import { View, Text, Button } from 'react-native';
import GlobalStyles from '../styles/global';

const Home = ({ navigation }) => {
    return (
        <View style={GlobalStyles.main}>
            <Text>
                Home
            </Text>
        </View>
    );
}

export default Home;