import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Auth/Login';
import Signup from '../Auth/SignUp';
import Forgot from '../Auth/Forgot';
import BottomTab from '../navigator/BottomTab';

const Stack = createStackNavigator();


const Main = () => {

        return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Forgot" component={Forgot} />
                <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
            </Stack.Navigator>
        );
    }
export default Main;
