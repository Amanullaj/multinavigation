import React, { useEffect, useState } from 'react';
import { Appearance, View, Image } from 'react-native';
import Main from './src/navigator/Main'
import { NavigationContainer } from '@react-navigation/native';
import { icons } from './src/images/icons';


const App = () => {
const[isloading, setIsLoading] = useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setIsLoading( false )
    }, 500);
  })

  
    return (
      <NavigationContainer>
        {
        isloading ?
          <View style={{ backgroundColor: '#0066b4', height: '100%',  width: '100%',
            justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: '90%', alignSelf: 'center', height: 100,
              justifyContent: 'center', alignItems: 'center' }}>
              <Image source={icons.logowhite} style={{ width: '50%', height: '100%',
                resizeMode: 'contain', alignSelf: 'center'}} />
            </View>
          </View>
          :
          <Main />
          }
      </NavigationContainer>
    );
  }



export default App;
