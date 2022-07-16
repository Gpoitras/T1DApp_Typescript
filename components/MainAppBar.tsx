/* eslint-disable prettier/prettier */
/* eslint-disable semi */


import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const MainAppBar = () => (
 <Appbar style={styles.bottom}>
   <Appbar.Action
     icon="camera"
     onPress={() => console.log('Pressed archive')}
    />
  </Appbar>
 );

export default MainAppBar

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: 'limegreen',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});

