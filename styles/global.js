import { StyleSheet } from "react-native";

const GlobalStyles = StyleSheet.create({
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
        padding: 15,
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
        marginRight: 15,
        alignItems: 'center'
    },
    paragraph: {
        marginRight: 6,
        fontWeight: 'bold'
    },
    info: {
        marginLeft: 15,
        flexDirection: 'column',
    },
    drawerBottom: {
        marginBottom: 10,
        borderTopColor: '#f4f4f4',
        borderTopWidth:1
    },
    preferences: {
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    }
});

export default GlobalStyles;