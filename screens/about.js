import React from 'react';
import { View, Text, Button } from 'react-native';
import GlobalStyles from '../styles/global';

const About = ({ navigation }) => {
    return (
        <View style={GlobalStyles.main}>
            <Text>
                About
            </Text>
        </View>
    );
}

export default About;