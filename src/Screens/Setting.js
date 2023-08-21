import React, { Component, Fragment } from 'react';

import {
  SafeAreaView,
  ScrollView,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  View,

  FlatList,
  Platform,
  Dimensions,
  ActivityIndicator,
  ImageBackground,
} from 'react-native'; import { icons } from '../images/icons';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;


export default class Setting extends Component {
  state = {
    RNAarray: [],
    isLoading: true,
    temparr: [{
      name: 'test',
      img: icons.banner1
    },
    {
      name: 'test',
      img: icons.banner2
    },
    {
      name: 'test',
      img: icons.banner3
    },
    {
      name: 'test',
      img: icons.banner4
    },
    {
      name: 'test',
      img: icons.banner5
    }],

  };

  constructor() {
    super();

  }

  componentDidMount() {
  }

  render() {
    return (

      <SafeAreaView style={styles.container}>
        <View style={{
          height: 64,
          width: windowWidth,
          justifyContent: 'center',
          alignItems: 'flex-start',
          backgroundColor:'white'

        }}>

        </View>

        <View style={{ height: 200, width: windowWidth }}>
          <FlatList
            horizontal
            pagingEnabled={true}
            data={this.state.temparr}
            renderItem={({ item }) => (
              <TouchableOpacity style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: windowWidth,
                height: '100%',
                // backgroundColor: 'red'
              }}>
                <Image
                  source={item.img}
                  resizeMode='cover'
                  style={{
                    width: windowWidth,
                    height: '100%',
                  }} />
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </SafeAreaView>
    );
  }
}

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