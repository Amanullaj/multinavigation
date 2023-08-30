import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { icons } from '../images/icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Dimensions, SafeAreaView, TextInput, TouchableOpacity,
  ScrollView, Button, StyleSheet, Image, Text, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

  const Signup = () => {
    const navigation = useNavigation();
    const[firstName,setFirstName] = useState('');
    const[lastname,setLastname] = useState('');
    const[emailid,setEmailid] = useState('');
    const[dob,setDob] = useState('');
    const[mobileno,setMobileno] = useState('');
    const[password,setPassword] = useState('');
    const[referralcode,setReferralcode] = useState('');
    const[showpassword,setShowpassword] = useState(false)


  showpasswordBtn = async () => {
    if (showpassword) {
      await setShowpassword(false)
    } else {
      await setShowpassword(true)
    }
  }

    return (
      <SafeAreaView style={styles.container}>
        <View style={{flexDirection: 'column',alignItems: 'center',backgroundColor: 'white',width: '100%',height: '100%'}}>
          <View style={{height: 30,width: '100%',}}>
            <TouchableOpacity onPress={() => navigation.pop()}
              style={{width: 30,height: 30,justifyContent: 'center',alignItems: 'center',alignSelf: 'flex-start',margin: 10, }}>
              <Icon name='times' size={20} color={'black'} />
            </TouchableOpacity>
          </View>
          <View style={{ width: '90%',alignSelf: 'flex-start',height: 100,justifyContent: 'center',alignItems: 'center'}}>
            <Image source={icons.logo} style={{ width: '50%',height: '100%', resizeMode: 'contain',alignSelf: 'center'}} />
          </View>

          <Text style={{fontSize: 17,color: 'black',width: '90%',padding: 5,textAlign: 'center',}}>{'Create an Account'}</Text>
          <KeyboardAwareScrollView>
            <View style={{flexDirection:'column',alignItems:'center'}}>
              <View style={{justifyContent: 'space-around',alignItems: 'center',flexDirection: 'column',width: '90%',padding: 10,}}>
                <View style={{flexDirection: 'row',justifyContent: 'space-around',alignItems: 'center',height: 45,marginBottom: 10,
                  width: screenWidth - 20}}>
                  <TextInput value={firstName} placeholder={'First Name'}
                    onChangeText={(text) => { setFirstName(text) }}
                    style={{width: '45%', height: 45,alignSelf: 'center', fontSize: 14,fontWeight: '600',backgroundColor: '#DCDCDC',
                      borderRadius: 5,marginBottom: 10, paddingLeft: 10,}}/>
                  <TextInput value={lastname} placeholder={'Last Name'}
                    onChangeText={(text) => { setLastname(text) }}
                    style={{width: '45%',height: 45,alignSelf: 'center',fontSize: 14,fontWeight: '600',backgroundColor: '#DCDCDC',
                      borderRadius: 5, marginBottom: 10,paddingLeft: 10,}}/>
                </View>

                <TextInput value={emailid} placeholder={'Email ID'}
                  onChangeText={(text) => { setEmailid(text) }}
                  style={{width: screenWidth - 40, height: 45,alignSelf: 'center',fontSize: 14,fontWeight: '600',backgroundColor: '#DCDCDC',
                    borderRadius: 5, marginBottom: 10, paddingLeft: 10, }} />

                <TouchableOpacity style={{width: screenWidth - 40,height: 45,alignSelf: 'center', backgroundColor: '#DCDCDC',borderRadius: 5,
                  flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={{fontSize: 14, fontWeight: '600',color: 'grey',paddingLeft: 10, }}>{dob == '' ? 'DOB' : dob}</Text>
                  <Icon name='calendar' size={15} color={'#3d56e1'} style={{ marginRight: 10 }} />
                </TouchableOpacity>
                <TextInput value={mobileno} placeholder={'Mobile Number'}
                  keyboardType={'phone-pad'}
                  maxLength={10}
                  onChangeText={(text) => { setMobileno(text) }}
                  style={{width: screenWidth - 40, height: 45,alignSelf: 'center',fontSize: 14,fontWeight: '600',backgroundColor: '#DCDCDC',
                    borderRadius: 5, marginBottom: 10, marginTop: 10, paddingLeft: 10,}}/>
                <View style={{width: screenWidth - 40, height: 45,flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center',
                  backgroundColor: '#DCDCDC', borderRadius: 5, }}>
                  <TextInput value={password} placeholder={'Create Password'}
                    secureTextEntry={true} onChangeText={(text) => { setPassword(text) }}
                    style={{width: '90%',height: 45,alignSelf: 'center',fontSize: 14,paddingLeft: 10,fontWeight: '600',backgroundColor: '#DCDCDC',
                      borderRadius: 5,}} />
                  <TouchableOpacity onPress={() => showpasswordBtn()}
                    style={{ justifyContent: 'center',alignItems: 'center',padding: 5, }}>
                    <Icon name={showpassword ? 'eye' : 'eye-slash'} size={20} color={'grey'} style={{marginRight: 10,}} />
                  </TouchableOpacity>
                </View>

                <TextInput value={referralcode} placeholder={'Referral Code (Optional'}
                  onChangeText={(text) => { setReferralcode(text) }}
                  style={{width: screenWidth - 40,height: 45, alignSelf: 'center',fontSize: 14,fontWeight: '600',backgroundColor: '#DCDCDC',
                    borderRadius: 5,marginBottom: 10,marginTop: 10,paddingLeft: 10,}}/>

              </View>

              <TouchableOpacity onPress={() => submit()}
                style={{backgroundColor: '#3d56e1',justifyContent: 'center',alignItems: 'center', height: 45,borderRadius: 5,width: screenWidth - 40,
                  alignSelf: 'center',marginTop: 10,padding: 10,}}>
                <Text style={{ fontSize: 14, fontWeight: '900', color: 'white' }}>{'Sign Up'}</Text>
              </TouchableOpacity>
              <View style={{flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',height: 30,width: screenWidth - 20}}>
                <Image source={icons.line} style={{ width: '45%', height: 15, resizeMode: 'contain' }} />
                <Text style={{ fontSize: 14, fontWeight: '500', color: '#DCDCDC' }}>{'OR'}</Text>
                <Image source={icons.line} style={{ width: '45%', height: 15, resizeMode: 'contain' }} />
              </View>
              <View style={{flexDirection: 'column', justifyContent: 'center',alignItems: 'center',width: screenWidth - 40}}>
                <Text style={{ marginTop: 10, fontSize: 15, fontWeight: '500', color: 'grey' }}>{'Use your social account'}</Text>

                <TouchableOpacity
                   style={{backgroundColor: 'white',justifyContent: 'center',alignItems: 'center',height: 45,elevation: 5,borderRadius: 5,
                    width: '80%',alignSelf: 'center',marginTop: 20,padding: 10,flexDirection: 'row',}}>
                  <Icon name='google' size={20} color={'#3d56e1'} />
                  <Text style={{ width: '80%', marginLeft: 15, fontSize: 14, fontWeight: '900', color: 'black' }}>{'Continue with Google'}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{backgroundColor: '#3d56e1',justifyContent: 'center',flexDirection: 'row',alignItems: 'center',height: 45,
                    elevation: 5,borderRadius: 5,width: '80%',alignSelf: 'center',marginTop: 15,padding: 10, }}>
                  <Icon name='facebook' size={20} color={'white'} />
                  <Text style={{ width: '80%', marginLeft: 15, fontSize: 14, fontWeight: '900', color: 'white' }}>{'Continue with Facebook'}</Text>
                </TouchableOpacity>
                <View
                 style={{justifyContent: 'center',alignItems: 'center', flexDirection: 'row',height: 45,borderRadius: 5,width: '80%',
                    alignSelf: 'center', marginTop: 10,padding: 10,}}>
                  <Text style={{ fontSize: 14, fontWeight: '900', color: 'grey' }}>{"Have an existing account ? "}</Text>
                  <Text onPress={() =>navigation.navigate('Login')} style={{ fontSize: 14, fontWeight: '900', color: '#3d56e1' }}>{"Sign In"}</Text>

                </View>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </SafeAreaView>
    );
  }


export default Signup;
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