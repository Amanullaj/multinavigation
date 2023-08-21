import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import SettingsScreen from '../Screens/Setting';
import StackNavOne from '../navigator/Drawer';
import Profile from '../Screens/Profile';
import Cart from '../Screens/Cart';
import Store from '../Screens/Store';
import Fupcoins from '../Screens/Fupcoins';
import TopBar from './TopBar';

const Tab = createMaterialBottomTabNavigator();

const BottomTab = () => {

    return (
      <Tab.Navigator initialRouteName="Store" activeColor="black" barStyle={{ backgroundColor: 'white' }}>
        <Tab.Screen name="Home" component={StackNavOne} options={{tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (<Icon name="home" color={color} size={22} />
            ), }} />
        <Tab.Screen name="Store" component={TopBar} options={{tabBarLabel: 'Store',title : 'Store',
            tabBarIcon: ({ color }) => (<Icon name="shopping-basket" color={color} size={22} />
            ), }}/>
        <Tab.Screen name='Cart' component={Cart} options={{tabBarLabel: 'Cart',
            tabBarIcon: ({ color }) => (<Icon name="shopping-cart" color={color} size={22} />
            ), }}/>
        <Tab.Screen name='FUPCOINS' component={Fupcoins} options={{tabBarLabel: 'FUPCOINS',
            tabBarIcon: ({ color }) => (<Icon name="shopping-bag" color={color} size={22} />
            ), }}/>
        <Tab.Screen  name="Account" component={Profile} options={{tabBarLabel: 'Account',
            tabBarIcon: ({ color }) => (<Icon name="user-circle" color={color} size={22} />
            ), }}/>
      </Tab.Navigator>
    );
  }
export default BottomTab;
