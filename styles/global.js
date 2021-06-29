import { Dimensions, StyleSheet } from "react-native";


const { height } = Dimensions.get('screen');
const logoHeight = height * 0.25;
const GlobalStyles = StyleSheet.create({
    // Splash Screen
    container: {
        flex: 1,
        backgroundColor: '#6b737f'
    },
    splashHeader: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    splashFooter: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    splashTitle: {
        color: '#05375a',
        fontSize: 25,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop: 10
    },
    logo: {
        height: logoHeight,
        width: logoHeight,
        borderRadius: 50,
    },
    linearGradient: {
        marginTop: 30,
        alignItems: 'flex-end'
    },
    signup: {
        width: 160,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    },

    //Login  
    authHeader: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    authTitle: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold'
    },
    authFooter: {
        flex: 3,
        backgroundColor: '#fff',
        paddingVertical: 30,
        paddingHorizontal: 30,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    authInputSection: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    authInputTitle: {
        marginTop: 25,
        color: '#05375a',
        fontSize: 14
    },
    authTextInput: {
        flex: 1,
        color: '#05375a',
        paddingLeft: 15,
        marginTop: -10
    },
    authButton: {
        marginTop: 50,
        alignItems: 'center'
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20        
    },
    signInText: {
        fontSize: 14,
        fontFamily: 'bold'
    },

    //Main
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        color: '#fff',
        left: 15,
        position: 'absolute',
    },
    drawer: {
        flex: 1,
    },
    drawerContent: {
        flex: 1,
    },
    drawerSection: {
        marginTop: 5,
    },
    userSection: {
        padding: 14,
    },
    userInfo: {
        flexDirection: 'row',
        marginTop: 15,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        flexDirection: 'row',
        marginTop: 18,
        alignItems: 'center'
    },
    section: {
        flexDirection: 'row',
        marginRight: 14,
        alignItems: 'center'
    },
    paragraph: {
        marginRight: 4,
        fontWeight: 'bold'
    },
    info: {
        marginLeft: 12,
        flexDirection: 'column',
    },
    drawerBottom: {
        marginBottom: 10,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preferences: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    }
});

export default GlobalStyles;