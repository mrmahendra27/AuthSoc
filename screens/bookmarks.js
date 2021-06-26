import React from 'react';
import { View, Text, Button } from 'react-native';
import GlobalStyles from '../styles/global';

const Bookmarks = ({ navigation }) => {
    return (
        <View style={GlobalStyles.main}>
            <Text>
                Bookmarks
            </Text>
        </View>
    );
}

export default Bookmarks;