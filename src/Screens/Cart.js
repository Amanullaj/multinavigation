import React, { Component, Fragment,useState } from 'react';
import { SafeAreaView, ImageBackground,
  TouchableOpacity, ScrollView, Dimensions, Button, StyleSheet, Text, View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { icons } from '../images/icons';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const Cart = () => {
 
    return (

      <SafeAreaView style={styles.container}>
        <View style={{ width: '100%',height: 64, justifyContent: 'space-between',alignItems: 'center', flexDirection: 'row', backgroundColor: 'white' }}>

          <Text style={{fontSize: 17,fontWeight: 'bold',color: 'black', marginLeft: 10,}}>{'Cart'}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',width: '25%',marginRight: 10, }}>
            <TouchableOpacity style={{ width: 50,height: 50,justifyContent: 'center', alignItems: 'center' }}>
              <Icon name='search' size={20} color={'black'} />
            </TouchableOpacity>

            <TouchableOpacity style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}>
              <Icon name='heart' size={20} color={'black'} />
            </TouchableOpacity>

          </View>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center', width: screenWidth,height: screenHeight - 120}}>
          <Icon name='cart-plus' size={50} color={'grey'} />
          <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black',width: '100%', textAlign: 'center'}}>{'Your Cart is Empty'}</Text>
          <Text style={{fontSize: 14,fontWeight: 'bold',color: 'grey',marginTop: 20, width: '100%', textAlign: 'center' }}>{'Add item to it now.'}</Text>
          <TouchableOpacity style={{ backgroundColor: '#5c6dc1',justifyContent: 'center',alignItems: 'center', width: '40%', height: 40,
            marginTop: 10,borderRadius: 5,}}>
            <Text style={{ fontSize: 13, fontWeight: '600', color: 'white' }}>SHOP NOW</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    );
  }
export default Cart;

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