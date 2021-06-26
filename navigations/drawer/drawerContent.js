import React, { useState } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title, useTheme, Caption, TouchableRipple, Drawer, Paragraph, Switch, Text } from 'react-native-paper';
import GlobalStyles from '../../styles/global';


const DrawerContentItem = (props) => {

    const [isDarkTheme, setTheme] = useState(false);

    const toggleTheme = () => {
        setTheme(!isDarkTheme);
    }

    return (
        <View style={GlobalStyles.drawer}>
            <DrawerContentScrollView {...props}>
                <View style={GlobalStyles.drawerContent}>
                    <View style={GlobalStyles.userSection}>
                        <View style={GlobalStyles.userInfo}>
                            <Avatar.Image
                                style={GlobalStyles.avatar}
                                source={require('../../assets/images/user-1.png')}
                                size={60}
                            />
                            <View style={GlobalStyles.info}>
                                <Title style={GlobalStyles.title}>Mahendra Singh Khati</Title>
                                <Caption style={GlobalStyles.caption}>@name</Caption>
                            </View>
                        </View>
                        <View style={GlobalStyles.row}>
                            <View style={GlobalStyles.section}>
                                <Paragraph style={[GlobalStyles.caption, GlobalStyles.paragraph]}>10</Paragraph>
                                <Caption style={GlobalStyles.caption}>Following</Caption>
                            </View>
                            <View style={GlobalStyles.section}>
                                <Paragraph style={[GlobalStyles.caption, GlobalStyles.paragraph]}>27</Paragraph>
                                <Caption style={GlobalStyles.caption}>Followers</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={GlobalStyles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => {
                                <Icon
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            }}
                            label="Home"
                            onPress={() => props.navigation.navigate('Home')}
                        />
                        <DrawerItem
                            icon={({ color, size }) => {
                                <Icon
                                    name="account-outline"
                                    color={color}
                                    size={size}
                                />
                            }}
                            label="Profile"
                            onPress={() => props.navigation.navigate('Profile')}
                        />
                        <DrawerItem
                            icon={({ color, size }) => {
                                <Icon
                                    name="bookmark-outline"
                                    color={color}
                                    size={size}
                                />
                            }}
                            label="Bookmarks"
                            onPress={() => props.navigation.navigate('Bookmarks')}
                        />
                        <DrawerItem
                            icon={({ color, size }) => {
                                <Icon
                                    // name="settings-outline"
                                    color={color}
                                    size={size}
                                />
                            }}
                            label="Settings"
                            onPress={() => props.navigation.navigate('Settings')}
                        />
                        <DrawerItem
                            icon={({ color, size }) => {
                                <Icon
                                    name="account-check-outline"
                                    color={color}
                                    size={size}
                                />
                            }}
                            label="Support"
                            onPress={() => props.navigation.navigate('Support')}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="pereferences">
                        <TouchableRipple onPress={() => toggleTheme()}>
                            <View style={GlobalStyles.preferences}>
                                <Text>Theme</Text>
                                <View pointerEvents='none'>
                                    <Switch value={isDarkTheme}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={GlobalStyles.drawerBottom}>
                <DrawerItem
                    icon={({ color, size }) => {
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    }}
                    label="Sign Out"
                    onPress={() => alert('Sign Out')}
                />
            </Drawer.Section>
        </View>
    );
}

export default DrawerContentItem;