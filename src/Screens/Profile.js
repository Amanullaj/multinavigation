import React, { Component, Fragment } from 'react';
import { SafeAreaView, Dimensions, TouchableOpacity, FlatList, Image, ScrollView, Button, StyleSheet, Text, View } from 'react-native';
import { icons } from '../images/icons';
import Icon from 'react-native-vector-icons/FontAwesome';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const Profile = () => {
  const profilearr = [
    {title: 'Profile',img: 'user',},
    {title: 'Fast&Up Club',img: 'building',},
    {title: 'My Orders',img: 'cube',},
    {title: 'My Address',img: 'map-marker',},
    {title: 'Change Password',img: 'unlock-alt',},
    {title: 'My WishList',img: 'heart',},
    {title: 'Log Out',img: 'sign-out', }
    ,]

    return (
      <SafeAreaView style={styles.container}>
        <View style={{ width: screenWidth, height: '30%', justifyContent: 'center', alignItems: 'center',
          flexDirection: 'column', backgroundColor: '#3e5de6', borderBottomLeftRadius: 90, borderBottomRightRadius: 90,}}>
          <TouchableOpacity style={{ height: 100,width: 100,borderRadius: 50, justifyContent: 'center',
            alignItems: 'center', backgroundColor: '#d2d2d2' }}>
            <Icon name='user' size={80} color={'grey'} />
          </TouchableOpacity>
          <Text style={{ fontSize: 15, fontWeight: '700', color: 'white', width: '100%', textAlign: 'center' }}>{'Mr.Aman'}</Text>
          <Text style={{ fontSize: 15, fontWeight: '700', color: 'white', width: '100%', textAlign: 'center' }}>{'aman@gmail.com'}</Text>
        </View>
        <View style={{flexDirection: 'column',justifyContent: 'flex-start',alignItems: 'center',height: '70%',
          width: '100%'}}>
          <FlatList  data={profilearr}
            renderItem={({ item }) => (
              <TouchableOpacity style={{ flexDirection: 'row', elevation: 5,justifyContent: 'space-between',
                alignItems: 'center', width: screenWidth - 20, marginTop: 10, alignSelf: 'center', height: 50,
                padding: 10, backgroundColor: 'white', }}>
                <Icon name={item.img} size={20} color={'#3e5de6'} style={{ marginLeft: 10, }} />
                <Text style={{ width: '80%', textAlign: 'left', marginLeft: 5, fontSize: 14, fontWeight: '800', color: 'black' }}>{item.title}</Text>
                <Icon name="chevron-right" size={20} color={'#d2d2d2'} />
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />

        </View>
      </SafeAreaView>
    );
  }
export default Profile;

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