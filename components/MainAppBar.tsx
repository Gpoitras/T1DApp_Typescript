/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import * as React from 'react';
import { Appbar } from 'react-native-paper';
import Styles from '../styles/Styles';

const MainAppBar = () => (
 <Appbar style={Styles.mainAppBar}>
   <Appbar.Action
     icon="camera"
     onPress={() => console.log('Pressed archive')}
    />
  </Appbar>
 );

export default MainAppBar

