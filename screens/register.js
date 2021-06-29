import React, { useState, use } from 'react';
import { View, Text, StatusBar, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import GlobalStyles from '../styles/global';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

const Register = ({ navigation }) => {
    //without formik

    const [data, setData] = useState({
        email: '',
        password: '',
        confirm_password: '',
        secureTextEntry: true,
        confirm_secureTextEntry: true,
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

    const handleChangeConfirmPassword = () => {
        if(val.length != 0){
            setData({
                ...data,
                con
            })
        }
    }

    const registerHandle = (email, password) => {
        setData({ password: '', email: '', textChanged: false, secureTextEntry: true })
        console.log(email, password);
    }

    return (
        <View style={GlobalStyles.container}>
            <StatusBar backgroundColor="#6b737f" barStyle="light-content" />
            <View style={GlobalStyles.authHeader}>
                <Text style={GlobalStyles.authTitle}>Create Account!</Text>
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
                    <Text style={GlobalStyles.authInputTitle}>Confirm Password</Text>
                    <View style={GlobalStyles.authInputSection}>
                        <FeatherIcon
                            name="lock"
                            size={20}
                        />
                        <TextInput
                            style={GlobalStyles.authTextInput}
                            secureTextEntry={data.confirm_secureTextEntry}
                            autoCapitalize="none"
                            placeholderTextColor="#05375a"
                            placeholder="Re-Enter Password"
                            value={data.confirm_password}
                            onChangeText={(val) => handleChangeConfirmPassword(val)}
                        />
                        {
                            data.confirm_secureTextEntry ?
                                <FeatherIcon
                                    name="eye"
                                    size={20}
                                    onPress={() => setData({ ...data, confirm_secureTextEntry: false })}
                                />
                                : <FeatherIcon
                                    name="eye-off"
                                    size={20}
                                    onPress={() => setData({ ...data, confirm_secureTextEntry: true })}
                                />
                        }
                    </View>
                    <View style={GlobalStyles.authButton}>
                        <TouchableOpacity style={GlobalStyles.signIn} onPress={() => { registerHandle(data.email, data.password) }}>
                            <LinearGradient style={GlobalStyles.signIn} colors={['#6b737f', '#01ab9d']} style={GlobalStyles.signIn}>
                                <Text style={[GlobalStyles.signInText, {
                                    color: '#fff'
                                }]}>Sign Up</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={[GlobalStyles.signIn, { borderColor: '#009387', borderWidth: 1, marginTop: 15 }]}>
                            <Text style={[GlobalStyles.signInText, { color: '#009387' }]}>Already have an account, Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </TouchableWithoutFeedback>
        </View>
    );
}

export default Register;