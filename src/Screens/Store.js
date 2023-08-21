import React, { Component, Fragment, useState } from 'react';

import { SafeAreaView,Dimensions, ScrollView, Button, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { icons } from '../images/icons';
import Icon from 'react-native-vector-icons/FontAwesome';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const Store = () => {
    const[authenticated,setAuthenticated] = useState(false);
    const[context,setContext] = useState(null);

        return (
            <SafeAreaView style={styles.container}>
                <View style={{ width: '100%', height: 64,justifyContent: 'space-between',alignItems: 'center', flexDirection: 'row',
                    backgroundColor: 'white'}}>

                    <Text style={{fontSize: 17,fontWeight: 'bold',color: 'black',marginLeft: 10,}}>{'Store'}</Text>
                    <View style={{flexDirection: 'row',justifyContent: 'space-around',alignItems: 'center',
                        width: '25%',marginRight:10,}}>
                        <TouchableOpacity style={{ width: 50,height: 50,justifyContent: 'center',alignItems: 'center'}}>
                            <Icon name='search' size={20} color={'black'} />
                        </TouchableOpacity>

                        <TouchableOpacity style={{width: 50,height: 50,justifyContent: 'center',alignItems: 'center'}}>
                            <Icon name='heart' size={20} color={'black'} />
                        </TouchableOpacity>

                    </View>
                </View>

            </SafeAreaView>
        );
    }
export default Store;

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    button: {
        width: 300,
        height: 40,
        marginTop: 10,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
    }
});