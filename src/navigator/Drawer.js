import React, { Component } from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingsScreen from '../Screens/Setting';
import Profile from '../Screens/Profile';
import HomeScreen from '../Screens/HomeScreen';

const Drawer = createDrawerNavigator();

export default class DrawerScreen extends Component {

    render() {
        return (
            <Drawer.Navigator screenOptions={{
                headerShown: false
            }}>
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Setting" component={SettingsScreen} />
                <Drawer.Screen name="Profile" component={Profile} />
            </Drawer.Navigator>
        );
    }
}