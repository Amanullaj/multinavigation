import React, { Component, Fragment } from 'react';
import { SafeAreaView, Dimensions, FlatList,Image,ScrollView, Button, StyleSheet, Text, View
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { icons } from '../../images/icons';
import Icon from 'react-native-vector-icons/FontAwesome';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const Effervescent = () => {

    const  offerarray = [
      {
         title: "Fast&Up Plant Protein- 100% Plant Based Protien",
        desc: 'Certified, Tested & Trusted -31gms Wholegrain Protein with No Added Sugar or Artificial Flavours',
        flavour: '4',
        offer: '1',
        netamount: '2450',
        total: '3499',
        clubamount: '2274',
        img: icons.protein,
      },
      {
        title: "Fast&Up Plant Protein- 100% Plant Based Protien",
        desc: 'Certified, Tested & Trusted -31gms Wholegrain Protein with No Added Sugar or Artificial Flavours',
        flavour: '4',
        offer: '1',
        netamount: '2450',
        total: '3499',
        clubamount: '2274',
        img: icons.massgain,
      },
      {
        title: "Fast&Up Plant Protein- 100% Plant Based Protien",
        desc: 'Certified, Tested & Trusted -31gms Wholegrain Protein with No Added Sugar or Artificial Flavours',
        flavour: '4',
        offer: '1',
        netamount: '2450',
        total: '3499',
        clubamount: '2274',
        img: icons.protein,
      },]

    return (
      <SafeAreaView style={styles.container}>
        <FlatList data={offerarray}
          renderItem={({ item }) => (
            <TouchableOpacity style={{flexDirection: 'column',elevation: 5,justifyContent: 'flex-start',
              alignItems: 'center',width: screenWidth - 20,marginTop: 15,alignSelf: 'center',padding: 20,
              backgroundColor: 'white',borderRadius: 10,}}>
              <View style={{position: 'absolute',backgroundColor: '#88c4ec',width: screenWidth,top: 0,
                left: 0,right: 0,height: '55%',borderBottomLeftRadius:70,borderBottomRightRadius:70,}} />
              <Image source={item.img} resizeMode='contain' style={{borderRadius: 10,width: 180, height: 180,}} />
              <Text style={{width: '100%',textAlign: 'left', marginTop: 10, fontSize: 14, color: '#000000', fontWeight: '900'
              }}>{item.title}</Text>
              <Text style={{ width: '100%',textAlign: 'left', marginTop: 10, fontSize: 14, color: '#000000', fontWeight: '500'
              }}>{item.desc}</Text>
              <View style={{ width: '100%', height: 1, marginTop: 8, backgroundColor: 'lightgrey' }} />
              <Text style={{ width: '100%', textAlign: 'left', paddingLeft: 5, fontSize: 14, color: 'grey', fontWeight: '800', margin: 10, }}>{item.flavour + ' flavour'}</Text>
              <View style={{ width: '100%', height: 1, backgroundColor: 'lightgrey' }} />

              <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center',
                width: '100%',padding: 5,marginTop: 8,}}>
                <View style={{ flexDirection: 'column',justifyContent: 'space-around',alignItems: 'flex-start', }}>
                  <View style={{flexDirection: 'row',justifyContent: 'center', alignItems: 'flex-start',  }}>
                    <Text style={{ fontSize: 16, color: '#000000', fontWeight: '800' }}>{'\u20B9 ' + item.netamount}</Text>
                    <Text style={{ fontSize: 15, color: 'grey', fontWeight: '500' }}>{'  \u20B9 ' + item.total}</Text>
                  </View>
                  <Text style={{ fontSize: 14, fontWeight: '900', color: '#da6801' }}>{'30% OFF'}</Text>
                </View>

                <TouchableOpacity style={{borderColor: '#da6801',borderWidth: 1,justifyContent: 'center',alignItems: 'center',
                  width: '100%', height: 40, borderRadius: 20, backgroundColor: 'white',padding: 5,paddingLeft: 5,
                  paddingRight: 5}}>
                  <Text style={{ fontSize: 14, fontWeight: '900', color: '#da6801' }}>View Options</Text>
                </TouchableOpacity>
              </View>


              <View style={{flexDirection: 'column',justifyContent: 'center',alignItems: 'center',marginTop: 5,
                position: 'absolute',width: 70,borderRadius: 35, height: 70, backgroundColor: '#f29a4b',
                alignSelf: 'flex-start',top: '35%',left: '5%',}}>
                <Text style={{ fontSize: 13, color: '#5c6dc1', fontWeight: '800' }}>{'\u20B9 ' + item.clubamount}</Text>
                <Text style={{ fontSize: 13, color: 'black', fontWeight: '500' }}>{'for Club Member'}</Text>
              </View>

              <View style={{ flexDirection: 'column', justifyContent: 'space-between',alignItems: 'center',
                marginTop: 5, position: 'absolute',width: 50, height: '40%',alignSelf: 'flex-end',top: 20,
                right: '5%', }}>
                <TouchableOpacity style={{ elevation: 5, backgroundColor: 'white', borderRadius: 20, justifyContent: 'center', alignItems: 'center', width: 40, height: 40, }}>
                  <Icon name='heart' size={20} color={'grey'} />
                </TouchableOpacity>

                <Icon name='share-alt' size={20} color={'black'} />
              </View>

            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
    );
  }
export default Effervescent;

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
    backgroundColor: '#d2d2d2'
  }
});