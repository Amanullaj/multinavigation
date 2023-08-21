import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Apparel from '../Screens/TopTabs/Apparel';
import Offers from '../Screens/TopTabs/Offers';
import Bundles from '../Screens/TopTabs/Bundles';
import Effervesent from '../Screens/TopTabs/Effervescent';
import Protein from '../Screens/TopTabs/Protein'
import Whyprotein from '../Screens/TopTabs/wheyProtein'

const Tab = createMaterialTopTabNavigator();

const TopBar = () => {

        return (
            <Tab.Navigator sceneContainerStyle={{ backgroundColor: "white" }}
                initialRouteName="Offers"
                screenOptions={{ headerShown: true, tabBarActiveTintColor: '#5c6dc1',tabBarLabelStyle: { fontSize: 12 },
                    tabBarStyle: { backgroundColor: 'white' }, tabBarScrollEnabled: true,tabBarIndicatorStyle: {
                        backgroundColor: "grey",height: 1,} }} >
                <Tab.Screen name="OFFERS" component={Offers} options={{tabBarLabel: 'OFFERS',}}/>
                <Tab.Screen name="BUNDLES" component={Bundles} options={{ tabBarLabel: 'BUNDLES' }}/>
                <Tab.Screen name="EFFERVESCENT" component={Effervesent} options={{ tabBarLabel: 'EFFERVESCENT' }} />
                <Tab.Screen name="PROTEIN" component={Protein} options={{ tabBarLabel: 'PROTEIN' }}/>
                <Tab.Screen name="WHY PROTEIN" component={Whyprotein} options={{ tabBarLabel: 'WHY PROTEIN' }}/>

            </Tab.Navigator>
        );
    }
export default TopBar;
