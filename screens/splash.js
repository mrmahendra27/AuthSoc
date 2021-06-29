import React from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import GlobalStyles from '../styles/global';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

const Splash = ({ navigation }) => {
    return (
        <View style={GlobalStyles.container}>
            <StatusBar backgroundColor="#6b737f" barStyle="light-content" />
            <View style={GlobalStyles.splashHeader}>
                <Animatable.Image
                    animation="bounceIn"
                    duration={1500}
                    style={GlobalStyles.logo}
                    source={require('../assets/images/user-1.png')}
                    resizeMode="stretch"
                />
            </View>
            <Animatable.View style={GlobalStyles.splashFooter} animation="fadeInUpBig">
                <Text style={GlobalStyles.splashTitle}>Connect With Everyone around you or far away!</Text>
                <Text style={GlobalStyles.text}>Create an Account</Text>
                <View style={GlobalStyles.linearGradient}>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={GlobalStyles.signup}>
                        <Text style={GlobalStyles.textSign}>Get started</Text>
                        <Icon 
                        name="navigate-next"
                        color="#fff"
                        size={20}
                        />
                    </LinearGradient>
                </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
}

export default Splash;