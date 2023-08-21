import React, { Component, Fragment, useState } from 'react';
import {  SafeAreaView,  TextInput,  ScrollView, Button, StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { icons } from '../images/icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

 const Login = () => {
  const navigation = useNavigation();
  const[authenticated, setAuthenticated] = useState(false);
  const[constext, setContext] = useState(null);
  const[username,setUsername] = useState('');
  const[password, setPassword] = useState('');
  const[openLoginview, setOpenLoginview] = useState(false);
  const[showpassword,setShowpassword] = useState(false)
 
  submit = () => {
    if (setUsername == '') {
      alert('Please Enter Username')
      return
    } else if (setPassword == '') {
      alert('Please Enter Password')
      return
    } else {
      global.usercode = '1'
      navigation.navigate('BottomTab')

    }
  }

  signInBtn = async () => {
    await setOpenLoginview(true)
  }

  continueGuestuser = () => {
    navigation.navigate('BottomTab')
  }

  showpasswordBtn = async () => {
    if (setShowpassword) {
      await setShowpassword(false)
    } else {
      await setShowpassword(true)
    }
  }

      return (
      <SafeAreaView style={styles.container}>

        <View style={{width: '100%',height: 250,justifyContent: 'center',alignItems: 'center'}}>
          <Image source={icons.loginlogo} style={{width: '100%',height: '100%',alignSelf: 'center' }} />
        </View>

        <View style={{position: 'absolute',flexDirection: 'column',justifyContent: 'center',alignItems: 'center',bottom: 0,padding: 10,width: '100%',
          height: '20%', }}>
          <TouchableOpacity  onPress={() => signInBtn()}
            style={{height: 35,padding: 8,width: 80,justifyContent: 'center',alignItems: 'center',backgroundColor: '#f17e58',borderRadius: 5,}}>
            <Text style={{ fontSize: 14, fontWeight: '700', color: 'white' }}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => continueGuestuser()}
            style={{height: 40,padding: 8,width: '50%',marginTop: 15,justifyContent: 'center',alignItems: 'center', borderRadius: 5,
              borderColor: '#f17e58',borderWidth: 1,}}>
            <Text style={{ fontSize: 14, fontWeight: '700', color: 'white' }}>Continue as a Guest User</Text>
          </TouchableOpacity>
        </View>
        {
        openLoginview ?
          <View style={{position: 'absolute',flexDirection: 'column',alignItems: 'center',backgroundColor: 'white',width: '100%',height: '100%'}}>
            <View style={{height: 30, width: '100%',}}>
              <TouchableOpacity  onPress={() => setOpenLoginview(false)}
                style={{width: 30,height: 30,justifyContent: 'center',alignItems: 'center',alignSelf: 'flex-start',margin: 10, }}>
                <Icon name='times' size={20} color={'black'} />
              </TouchableOpacity>
            </View>
            <View style={{width: '90%',alignSelf: 'flex-start',height: 100,justifyContent: 'center',alignItems: 'center'}}>
              <Image source={icons.logo} style={{width: '50%',height: '100%',resizeMode: 'contain',alignSelf: 'center'}} />
            </View>
            <Text style={{fontSize: 17,color: 'grey',width: '90%',padding: 5,textAlign: 'center',}}>
              {'Bringing you the best in nutrition supplements'}</Text>
            <Text style={{fontSize: 17,color: 'black',width: '90%',padding: 5,textAlign: 'center',}}>{'Log In'}</Text>
            <View style={{justifyContent: 'space-around',alignItems: 'center',flexDirection: 'column',width: '90%',padding: 10,}}>
              <TextInput value={username} placeholder={'Enter Username'}
                onChangeText={(text) => { setUsername(text) }}
                style={{width: screenWidth - 40, height: 45,alignSelf: 'center',fontSize: 14,fontWeight: '600', backgroundColor: '#DCDCDC', borderRadius: 10,
                  marginBottom: 10, paddingLeft: 10,}} />

              <View style={{width: screenWidth - 40,height: 45, flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',
                backgroundColor: '#DCDCDC',borderRadius: 10,}}>
                <TextInput value={password} placeholder={'Enter Password'}
                  secureTextEntry={true}
                  onChangeText={(text) => { setPassword(text) }}
                  style={{width: '90%',height: 45, alignSelf: 'center',fontSize: 14,paddingLeft: 10,fontWeight: '600',backgroundColor: '#DCDCDC',
                    borderRadius: 10, }} />
                <TouchableOpacity onPress={() => showpasswordBtn()}
                  style={{justifyContent: 'center',alignItems: 'center',padding: 5,}}>
                  <Icon name={showpassword ? 'eye' : 'eye-slash'} size={20} color={'grey'} style={{marginRight: 10,}} />
                </TouchableOpacity>
              </View>

            </View>
            <View style={{justifyContent: 'center',alignItems: 'flex-end',padding: 5,width: screenWidth - 40,height: 30,}}>
              <Text onPress={() => navigation.navigate('Forgot')}
                style={{ fontSize: 14, fontWeight: '600', color: '#3d56e1', }}>{'Forgot password ?'}</Text>
            </View>
            <TouchableOpacity
              onPress={() => submit()}
              style={{backgroundColor: '#3d56e1', justifyContent: 'center',alignItems: 'center',height: 45,borderRadius: 5,width: screenWidth - 40,
                alignSelf: 'center',marginTop: 10,padding: 10,}}>
              <Text style={{ fontSize: 14, fontWeight: '900', color: 'white' }}>{'Sign In'}</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',height: 30,width: screenWidth - 20}}>
              <Image source={icons.line} style={{ width: '45%', height: 15, resizeMode: 'contain' }} />
              <Text style={{ fontSize: 14, fontWeight: '500', color: '#DCDCDC' }}>{'OR'}</Text>
              <Image source={icons.line} style={{ width: '45%', height: 15, resizeMode: 'contain' }} />
            </View>
            <View style={{flexDirection: 'column',justifyContent: 'center',alignItems: 'center',width: screenWidth - 40}}>
              <Text style={{ marginTop: 10, fontSize: 15, fontWeight: '500', color: 'grey' }}>{'Use your social account'}</Text>

              <TouchableOpacity
                  style={{backgroundColor: 'white',justifyContent: 'center',alignItems: 'center',height: 45,elevation: 5,borderRadius: 5,
                  width: '80%',alignSelf: 'center',marginTop: 20,padding: 10,flexDirection: 'row',}}>
                <Icon name='google' size={20} color={'#3d56e1'} />
                <Text style={{ width: '80%', marginLeft: 15, fontSize: 14, fontWeight: '900', color: 'black' }}>{'Continue with Google'}</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={{backgroundColor: '#3d56e1',justifyContent: 'center',flexDirection: 'row',alignItems: 'center',height: 45,
                  elevation: 5,borderRadius: 5,width: '80%',alignSelf: 'center',marginTop: 15,padding: 10,}}>
                <Icon name='facebook' size={20} color={'white'} />
                <Text style={{ width: '80%', marginLeft: 15, fontSize: 14, fontWeight: '900', color: 'white' }}>{'Continue with Facebook'}</Text>
              </TouchableOpacity>
              <View  style={{justifyContent: 'center',alignItems: 'center',flexDirection: 'row',height: 45,borderRadius: 5,width: '80%',
                  alignSelf: 'center',marginTop: 10,padding: 10, }}>
                <Text style={{ fontSize: 14, fontWeight: '900', color: 'grey' }}>{"Don't have an Account ? "}</Text>
                <Text onPress={() => navigation.navigate('Signup')} style={{ fontSize: 14, fontWeight: '900', color: '#3d56e1' }}>{"Sign Up"}</Text>

              </View>
            </View>
          </View> : null}

      </SafeAreaView>
    );
  }


export default Login;
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0066b4'
  }
});