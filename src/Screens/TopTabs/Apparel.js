import React, { Component, Fragment, useState } from 'react';

import { SafeAreaView, ScrollView, Button, StyleSheet, Text, View } from 'react-native';

const Cart = () => {
  const[authenticated,setAuthenticated] = useState(false);
  const[context,setContext] = useState(null);

    return (
      <Fragment>
        <SafeAreaView style={styles.container}>
        
        </SafeAreaView>
      </Fragment>
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