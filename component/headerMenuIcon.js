import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import GlobalStyles from '../styles/global';

const HeaderMenuIcon = ({ navigation }) => {
    return (
        <Icon name="menu" size={30} style={GlobalStyles.icon} onPress={() => navigation.openDrawer()} />
    );
}

export default HeaderMenuIcon;