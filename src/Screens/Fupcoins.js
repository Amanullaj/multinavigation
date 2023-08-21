import React, { Component, Fragment } from 'react';
import {  SafeAreaView, ImageBackground,
  TouchableOpacity, Image, ScrollView, FlatList, Dimensions, Button, StyleSheet, Text, View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { icons } from '../images/icons';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const Fupcoins = () => {
  const historyArr = [{
    title: 'Registration FUPCOIN',
    status: 'Approved',
    datetime: '2022-08-10 22:23:24',
    earnamount: '25' }, ]

 
    return (

      <SafeAreaView style={styles.container}>
        <View style={{ width: '100%', height: 64,justifyContent: 'flex-start', alignItems: 'center',
          flexDirection: 'row', backgroundColor: 'white' }}>
          <TouchableOpacity style={{ width: 50,height: 50,justifyContent: 'center',alignItems: 'center' }}>
            <Icon name='angle-left' size={35} color={'black'} />
          </TouchableOpacity>
          <Text style={{fontSize: 17,fontWeight: 'bold', color: 'black',marginLeft: 10,}}>{'FUPCOIN'}</Text>

        </View>
        <View style={{justifyContent: 'flex-start', alignItems: 'center',flexDirection: 'column',
          width: screenWidth,height: screenHeight - 120,backgroundColor: 'white' }}>
          <View style={{ width: '100%', height: '15%', backgroundColor: 'white', flexDirection: 'column',
            justifyContent: 'space-around', alignItems: 'center', }}>
            <Text style={{ fontSize: 15, fontWeight: '500', color: 'black' }}>{'TOTAL FUPCOIN'}</Text>
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#da6801' }}>{'25'}</Text>
            <Text style={{ fontSize: 15, fontWeight: '500', color: 'black' }}>{'1 FUPCOIN = ' + ' \u20B9 1'}</Text>
          </View>
          <View style={{ width: screenWidth,height: '85%' }}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',height: '10%',
              width: screenWidth, borderBottomColor: 'black', borderBottomWidth: 1 }}>
              <TouchableOpacity style={{ justifyContent: 'center',alignItems: 'center', height: '100%',width: screenWidth / 3
              }}>
                <Text style={{ fontSize: 14, fontWeight: '600', color: '#3e5de6' }}>{'HISTORY'}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{justifyContent: 'center',alignItems: 'center',height: '100%',width: screenWidth / 3
              }}>
                <Text style={{ fontSize: 14, fontWeight: '600', color: 'black' }}>{'EARN FUPCOIN'}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{justifyContent: 'center',alignItems: 'center', height: '100%',
                width: screenWidth / 3 }}>
                <Text style={{ fontSize: 14, fontWeight: '600', color: 'black' }}>{'FAQS'}</Text>
              </TouchableOpacity>

            </View>
            <View style={{height: '90%',width: '100%'}}>
              <FlatList data={historyArr}
                renderItem={({ item }) => (
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
                    width: '100%', padding: 8,backgroundColor: 'white', marginTop: 10, }}>
                    <Image source={icons.coins} style={{ width: 20, height: 20, marginLeft: 10, marginRight: 5, }} />
                    <View style={{ width: '70%', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                      <Text style={{ paddingLeft: 5, fontSize: 14, color: 'black', fontWeight: '900', }}>{item.title}</Text>
                      <Text style={{ paddingLeft: 5, fontSize: 13, color: 'black', fontWeight: '900', }}>{'(' + item.status + ')'}</Text>
                    </View>
                    <View style={{ width: '20%', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                      <Text style={{ fontSize: 14, color: 'green', fontWeight: '900', }}>{'+' + item.earnamount}</Text>
                      <Text style={{ fontSize: 13, color: 'grey', fontWeight: '900', }}>{item.datetime}</Text>
                    </View>
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>

            <TouchableOpacity style={{backgroundColor: '#3e5de6',justifyContent: 'center', alignItems: 'center',
              position:'absolute',  bottom:'40%', alignSelf:'center', width: '80%',height: 40,  borderRadius:8 }}>
              <Text style={{ fontSize: 14, fontWeight: '600', color: 'white' }}>TAP TO EARN FUPCOIN</Text>
            </TouchableOpacity>

          </View>
        </View>
      </SafeAreaView>
    );
  }
export default Fupcoins;

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
    alignItems: 'center',
  }
});