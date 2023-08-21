import { useNavigation } from '@react-navigation/native';
import React, { Component, Fragment, useState } from 'react';

import { SafeAreaView, TextInput, Dimensions, ScrollView, Button, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const Forgot = () => {
    const navigation = useNavigation()
    const[emailid, setEmailid] = useState();

        return (
            <SafeAreaView style={styles.container}>
                <View style={{ width: '100%', height: 64,justifyContent: 'flex-start',alignItems: 'center', flexDirection: 'row',
                    backgroundColor: 'white'}}>
                    <TouchableOpacity onPress={() =>navigation.pop()}
                        style={{height: 50, width: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name='chevron-left' size={20} color={'black'} />
                    </TouchableOpacity>
                    <Text style={{fontSize: 16,fontWeight: 'bold',color: 'black'}}>{'Forgot password'}</Text>
                </View>
                <Text style={{fontSize: 15,fontWeight: '700',color: 'black',width: '100%', padding: 10,textAlign: 'center',
                }}>{"Just enter the email address you've used to register with us and we'll send you reset link! "}</Text>

                <TextInput value={emailid} placeholder={'Email ID'}
                    onChangeText={(text) => { setEmailid(text) }}
                    style={{width: screenWidth - 40,height: 45,alignSelf: 'center', fontSize: 14,fontWeight: '600',backgroundColor: 'white',
                        borderRadius: 10, marginBottom: 10, paddingLeft: 10,}}/>

                <TouchableOpacity
                    style={{backgroundColor: '#3d56e1',justifyContent: 'center',alignItems: 'center',height: 45,borderRadius: 5,
                        width: screenWidth - 40, alignSelf: 'center', marginTop: 10, padding: 10, }}>
                    <Text style={{ fontSize: 14, fontWeight: '900', color: 'white' }}>{'SUBMIT'}</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }

export default Forgot;
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