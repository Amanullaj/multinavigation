import React, { Component, Fragment, useState } from 'react';
import { SafeAreaView, ScrollView, Button,TouchableOpacity, Image, StyleSheet, Text, View,
  FlatList,  Platform,  Dimensions,  ActivityIndicator,  ImageBackground,  Animated} from 'react-native';
import { icons } from '../images/icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ExpandingDot } from "react-native-animated-pagination-dots";
import { useNavigation } from '@react-navigation/native';


const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

const HomeScreen = () => {
  const navigation= useNavigation();
  const [isLoading,setLoading] = useState();
  const temparr = [
    {name: 'Birthday Sale 2022 - Assured Gifts on every purchase',img: icons.banner1},
    {name: 'Birthday Sale 2022 - Assured Gifts on every purchase',img: icons.banner2},
    {name: 'Birthday Sale 2022 - Assured Gifts on every purchase',img: icons.banner3},
    {name: 'Birthday Sale 2022 - Assured Gifts on every purchase',img: icons.banner4},
    {name: 'Birthday Sale 2022 - Assured Gifts on every purchase',img: icons.banner5}
  ]

  const topsellingArr = [
    {title: "Fast&Up Plant Protein- 100% Plant Based Protien", netamount: '2450',
    total: '3499', clubamount: '2274', img: icons.protein, },
    {title: "Fast&Up Plant Protein- 100% Plant Based Protien", netamount: '2450',
    total: '3499',clubamount: '2274',img: icons.massgain,},
    {title: "Fast&Up Plant Protein- 100% Plant Based Protien", netamount: '2450',
    total: '3499', clubamount: '2274', img: icons.protein, },
  ]
  const  clubarray = [
    {
    title: 'Free Nutritional consultation',
    desc: 'Learn the right way to remain fit with our expert nutritionist. Get a guided one-on-one consultation from the comfort of your home.'
  }, {
    title: 'Earn more FUP Coins',
    desc: 'Learn the right way to remain fit with our expert nutritionist. Get a guided one-on-one consultation from the comfort of your home.'
  }, {
    title: 'Early Access to big sale days',
    desc: 'Learn the right way to remain fit with our expert nutritionist. Get a guided one-on-one consultation from the comfort of your home.'
  }, {
    title: '5% Extra Discount',
    desc: 'Learn the right way to remain fit with our expert nutritionist. Get a guided one-on-one consultation from the comfort of your home.'
  }, {
    title: 'Prioritized Delivery',
    desc: 'Learn the right way to remain fit with our expert nutritionist. Get a guided one-on-one consultation from the comfort of your home.'
  }, {
    title: 'Fee Shipping',
    desc: 'Learn the right way to remain fit with our expert nutritionist. Get a guided one-on-one consultation from the comfort of your home.'
  },]

 

  openSideMenu = () => {
    navigation.toggleDrawer();
  }

  
    return (

      <SafeAreaView style={styles.container}>
        <View style={{ height: 64,width: windowWidth,justifyContent: 'space-between',alignItems: 'center',
          backgroundColor: 'white', flexDirection: 'row'  }}>
          <Icon style={{ marginLeft: 10 }} name='bars' size={20} color={'black'} onPress={() => openSideMenu()} />
          <Text style={{ paddingLeft: 10, fontSize: 15, fontWeight: '700', color: 'black', width: '60%' }}>{'Hi Aman'}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '30%', }}>
            <Icon style={{ marginLeft: 5 }} name='search' size={20} color={'black'} />
            <Icon style={{ marginLeft: 5 }} name='heart' size={20} color={'black'} />
            <Icon style={{ marginLeft: 5 }} name='bell' size={20} color={'black'} />
          </View>
        </View>
        <ScrollView>
          <View style={{ height: 240, width: windowWidth }}>
            <FlatList horizontal  pagingEnabled={true}
              data={temparr}  renderItem={({ item }) => (
                <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
                  width: windowWidth, height: '100%', }}>
                  <Image source={item.img} resizeMode='cover' style={{width: windowWidth, height: '100%',}} />
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
              decelerationRate={'normal'}
              scrollEventThrottle={16}   />

          </View>
          <Text style={{ width: '100%', textAlign: 'left', fontSize: 15, fontWeight: 'bold', color: 'black', padding: 10, }}>{'Fast&Up Blogs'}</Text>
          <View style={{ height: 240, width: windowWidth }}>
            <FlatList horizontal pagingEnabled={true}
              data={temparr} renderItem={({ item }) => (
                <TouchableOpacity style={{flexDirection: 'column',justifyContent: 'flex-start',alignItems: 'center',
                  width: windowWidth - 40, borderRadius: 10, marginLeft: 10, height: '100%', }}>
                  <Image source={item.img} resizeMode='cover' style={{borderRadius: 10, width: windowWidth - 40,
                      height: '80%',}} />
                  <Text numberOfLines={3}
                    style={{fontSize: 15,paddingLeft: 5,fontWeight: '800',color: 'black', width: '100%',
                      textAlign: 'left', }}>{item.name}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()} />

          </View>
          <Text style={{ width: '100%', textAlign: 'left', fontSize: 15, fontWeight: 'bold', color: 'black', padding: 10, }}>{'Top Selling Products'}</Text>
          <View style={{ height: 290, width: windowWidth }}>
            <FlatList horizontal  pagingEnabled={true}
              data={topsellingArr} renderItem={({ item }) => (
                <TouchableOpacity style={{flexDirection: 'column', elevation: 5, justifyContent: 'flex-start',
                  alignItems: 'center',  width: 230, height: '100%', padding: 5, backgroundColor: 'white',
                  borderRadius: 10,marginLeft: 10, height: '100%',}}>
                  <Image source={item.img} resizeMode='contain'
                    style={{borderRadius: 10,width: 150,height: 150, }} />
                  <Text style={{width: '100%',textAlign: 'center', fontSize: 14, color: '#000000', fontWeight: '900'
                  }}>{item.title}</Text>

                  <View style={{flexDirection: 'row',justifyContent: 'space-around',alignItems: 'center',marginTop: 5,   }}>
                    <Text style={{ fontSize: 13, color: '#000000', fontWeight: '800' }}>{'\u20B9 ' + item.netamount}</Text>
                    <Text style={{ fontSize: 13, color: 'grey', fontWeight: '500' }}>{'  \u20B9 ' + item.total}</Text>
                  </View>
                  <View style={{flexDirection: 'row',justifyContent: 'space-around',alignItems: 'center', marginTop: 5, }}>
                    <Text style={{ fontSize: 13, color: '#5c6dc1', fontWeight: '800' }}>{'\u20B9 ' + item.clubamount}</Text>
                    <Text style={{ fontSize: 13, color: '#da6801', fontWeight: '500' }}>{' for Club Member >'}</Text>
                  </View>
                  <TouchableOpacity style={{backgroundColor: '#da6801',justifyContent: 'center',alignItems: 'center',
                    width: '50%',height: 35,marginTop: 5,borderRadius: 5,}}>
                    <Text style={{ fontSize: 13, fontWeight: '600', color: 'white' }}>Add to cart</Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()} />

          </View>
          <Text style={{ width: '100%', textAlign: 'left', fontSize: 15, fontWeight: 'bold', color: 'black', padding: 10, }}>{'New & Exclusive'}</Text>
          <View style={{ height: 290, width: windowWidth }}>
            <FlatList  horizontal    pagingEnabled={true}
              data={topsellingArr}  renderItem={({ item }) => (
                <TouchableOpacity style={{flexDirection: 'column', elevation: 5,justifyContent: 'flex-start',
                  alignItems: 'center',width: 230,height: '100%', padding: 5,backgroundColor: 'white',
                  borderRadius: 10,marginLeft: 10,height: '100%', }}>
                  <Image source={item.img} resizeMode='contain' style={{borderRadius: 10, width: 150, height: 150, }} />
                  <Text style={{ width: '100%',textAlign: 'center', fontSize: 14, color: '#000000', fontWeight: '900'
                  }}>{item.title}</Text>

                  <View style={{flexDirection: 'row',justifyContent: 'center',alignItems: 'center', marginTop: 5, }}>
                    <Text style={{ fontSize: 13, color: '#000000', fontWeight: '800' }}>{'\u20B9 ' + item.netamount}</Text>
                  </View>
                  <View style={{ flexDirection: 'row',justifyContent: 'space-around',alignItems: 'center', marginTop: 5, }}>
                    <Text style={{ fontSize: 13, color: '#5c6dc1', fontWeight: '800' }}>{'\u20B9 ' + item.clubamount}</Text>
                    <Text style={{ fontSize: 13, color: '#da6801', fontWeight: '500' }}>{' for Club Member >'}</Text>
                  </View>
                  <TouchableOpacity style={{backgroundColor: '#da6801', justifyContent: 'center',  alignItems: 'center',
                    width: '50%',  height: 35,  marginTop: 5, borderRadius: 5, }}>
                    <Text style={{ fontSize: 13, fontWeight: '600', color: 'white' }}>Add to cart</Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}/>

          </View>
          <Text style={{ width: '100%', textAlign: 'left', fontSize: 15, fontWeight: 'bold', color: 'black', padding: 10, }}>{'Recent Viewed by you'}</Text>
          <View style={{ height: 290, width: windowWidth, marginBottom: 4, }}>
            <FlatList horizontal pagingEnabled={true}
              data={topsellingArr} renderItem={({ item }) => (
                <TouchableOpacity style={{flexDirection: 'column',elevation: 5,justifyContent: 'flex-start', alignItems: 'center',
                  width: 230,height: '100%', padding: 5, backgroundColor: 'white', borderRadius: 10, marginLeft: 10,
                  height: '100%', }}>
                  <Image source={item.img} resizeMode='contain' style={{borderRadius: 10, width: 150, height: 150, }} />
                  <Text style={{ width: '100%', textAlign: 'center', fontSize: 14, color: '#000000', fontWeight: '900'
                  }}>{item.title}</Text>

                  <View style={{flexDirection: 'row',justifyContent: 'space-around', alignItems: 'center',
                    marginTop: 5, }}>
                    <Text style={{ fontSize: 13, color: '#000000', fontWeight: '800' }}>{'\u20B9 ' + item.netamount}</Text>
                    <Text style={{ fontSize: 13, color: 'grey', fontWeight: '500' }}>{'  \u20B9 ' + item.total}</Text>
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'space-around',alignItems: 'center',
                    marginTop: 5, }}>
                    <Text style={{ fontSize: 13, color: '#5c6dc1', fontWeight: '800' }}>{'\u20B9 ' + item.clubamount}</Text>
                    <Text style={{ fontSize: 13, color: '#da6801', fontWeight: '500' }}>{' for Club Member >'}</Text>
                  </View>
                  <TouchableOpacity style={{backgroundColor: '#da6801', justifyContent: 'center', alignItems: 'center',
                    width: '50%', height: 35, marginTop: 5, borderRadius: 5, }}>
                    <Text style={{ fontSize: 13, fontWeight: '600', color: 'white' }}>Add to cart</Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}/>

          </View>
          <View style={{alignSelf: 'center', justifyContent: 'center',alignItems: 'center',  width: windowWidth / 2,
            height: 90, }}>
            <Image source={icons.logo} style={{ width: '100%', height: '100%', alignSelf: 'center', resizeMode: 'contain' }} />
          </View>
          <View style={{ height: 300, width: windowWidth, }}>
            <FlatList horizontal pagingEnabled={true}
              data={clubarray} renderItem={({ item }) => (
                <TouchableOpacity style={{flexDirection: 'column', elevation: 5,justifyContent: 'center',
                  alignItems: 'center', width: windowWidth / 1.5,  height: '100%', padding: 10, backgroundColor: 'white',
                  borderRadius: 10, marginLeft: 10, height: '100%', }}>
                  <Icon name='users' size={60} color={'#da6801'} />
                  <Text style={{ width: '100%', textAlign: 'center', fontSize: 14, color: '#000000',
                    fontWeight: '900', marginTop: 10, }}>{item.title}</Text>
                  <Text style={{width: '100%', textAlign: 'center', fontSize: 14, color: '#000000',fontWeight: '400',
                    marginTop: 10, }}>{item.desc}</Text>

                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}  />

          </View>
          <View style={{flexDirection: 'column', justifyContent: 'flex-start',alignItems: 'center',  marginTop: 10,
            width: windowWidth, height: 100 }}>
            <Text style={{  width: '100%', textAlign: 'center', fontSize: 15,color: 'grey',fontWeight: '700',
              marginTop: 10, }}>{'FOLLOW US ON'}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',
              height: 60, width: windowWidth }}>
              <TouchableOpacity style={{justifyContent: 'center',alignItems: 'center', padding: 5,width: 40,
                height: 40,borderRadius: 20, borderWidth: 1, borderColor: 'black'}}>
                <Icon name='facebook' size={20} color={'black'} />
              </TouchableOpacity>
              <TouchableOpacity style={{justifyContent: 'center',alignItems: 'center',padding: 5,width: 40,
                height: 40,borderRadius: 20, borderWidth: 1, borderColor: 'black' }}>
                <Icon name='twitter' size={20} color={'black'} />
              </TouchableOpacity>
              <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', padding: 5, width: 40,
                height: 40, borderRadius: 20, borderWidth: 1, borderColor: 'black' }}>
                <Icon name='instagram' size={20} color={'black'} />
              </TouchableOpacity>
              <TouchableOpacity style={{justifyContent: 'center',alignItems: 'center',padding: 5, width: 40,
                height: 40,borderRadius: 20, borderWidth: 1, borderColor: 'black' }}>
                <Icon name='pinterest-p' size={20} color={'black'} />
              </TouchableOpacity>
              <TouchableOpacity style={{justifyContent: 'center',alignItems: 'center', padding: 5, width: 40,
                height: 40,borderRadius: 20, borderWidth: 1,borderColor: 'black'   }}>
                <Icon name='youtube' size={20} color={'black'} />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

      </SafeAreaView>
    );
  }
export default HomeScreen;

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