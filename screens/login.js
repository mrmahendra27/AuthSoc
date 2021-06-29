import React, { useState } from 'react';
import { View, Text, Button, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, StatusBar } from 'react-native';
import GlobalStyles from '../styles/global';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

const Login = ({ navigation }) => {
    //without formik

    const [data, setData] = useState({
        email: '',
        password: '',
        secureTextEntry: true,
        textChanged: false
    });

    const handleChange = (val) => {
        if (val.length != 0) {
            setData({
                ...data,
                email: val,
                textChanged: true
            })
        } else {
            setData({
                ...data,
                email: val,
                textChanged: false
            })
        }
    }

    const handleChangePassword = (val) => {
        if (val.length != 0) {
            setData({
                ...data,
                password: val,
            })
        }
    }

    const loginHandle = (email, password) => {
        setData({ password: '', email: '', textChanged: false, secureTextEntry: true })
        console.log(email, password);
    }

    return (
        <View style={GlobalStyles.container}>
            <StatusBar backgroundColor="#6b737f" barStyle="light-content" />
            <View style={GlobalStyles.authHeader}>
                <Text style={GlobalStyles.authTitle}>Welcome!</Text>
            </View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Animatable.View animation="fadeInUpBig" style={GlobalStyles.authFooter}>
                    <Text style={GlobalStyles.authInputTitle}>Email</Text>
                    <View style={GlobalStyles.authInputSection}>
                        <FeatherIcon
                            name="user"
                            size={20}
                        />
                        <TextInput
                            style={GlobalStyles.authTextInput}
                            autoCapitalize="none"
                            placeholderTextColor="#05375a"
                            placeholder="Enter Email"
                            value={data.email}
                            onChangeText={(val) => handleChange(val)}
                        />
                        {
                            data.textChanged ?
                                <Animatable.View animation="bounceIn">
                                    <FeatherIcon
                                        name="check-circle"
                                        size={20}
                                    />
                                </Animatable.View>
                                : null
                        }
                    </View>
                    <Text style={GlobalStyles.authInputTitle}>Password</Text>
                    <View style={GlobalStyles.authInputSection}>
                        <FeatherIcon
                            name="lock"
                            size={20}
                        />
                        <TextInput
                            style={GlobalStyles.authTextInput}
                            secureTextEntry={data.secureTextEntry}
                            autoCapitalize="none"
                            placeholderTextColor="#05375a"
                            placeholder="Enter Password"
                            value={data.password}
                            onChangeText={(val) => handleChangePassword(val)}
                        />
                        {
                            data.secureTextEntry ?
                                <FeatherIcon
                                    name="eye"
                                    size={20}
                                    onPress={() => setData({ ...data, secureTextEntry: false })}
                                />
                                : <FeatherIcon
                                    name="eye-off"
                                    size={20}
                                    onPress={() => setData({ ...data, secureTextEntry: true })}
                                />
                        }
                    </View>
                    <View style={GlobalStyles.authButton}>
                        <TouchableOpacity style={GlobalStyles.signIn} onPress={() => { loginHandle(data.email, data.password) }}>
                            <LinearGradient style={GlobalStyles.signIn} colors={['#6b737f', '#01ab9d']} style={GlobalStyles.signIn}>
                                <Text style={[GlobalStyles.signInText, {
                                    color: '#fff'
                                }]}>Sign In</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')} style={[GlobalStyles.signIn, { borderColor: '#009387', borderWidth: 1, marginTop: 15 }]}>
                            <Text style={[GlobalStyles.signInText, { color: '#009387' }]}>Don't have an account, Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </TouchableWithoutFeedback>
        </View>
    );
}

export default Login;