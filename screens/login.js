import React from 'react';
import { View, Text, Button } from 'react-native';
import GlobalStyles from '../styles/global';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

const Login = ({navigation}) => {
    return (
        <View style={GlobalStyles.container}>
            <View style={GlobalStyles.authHeader}>
                <Text style={GlobalStyles.authTitle}>Welcome</Text>
            </View>
            <View style={GlobalStyles.authFooter}>
                <Text>Login</Text>
            </View>
        </View>
    );
}

export default Login;