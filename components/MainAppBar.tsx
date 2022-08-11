/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import React, { FC } from 'react';
import { Appbar } from 'react-native-paper';
import Styles from '../styles/Styles';

interface AppBars {
  navigateTo: any;
}

const MainAppBar: FC<AppBars> = props => {
  return (
  <Appbar style={Styles.mainAppBar}>
    <Appbar.Action
      icon="archive"
      onPress={() => {
        props.navigateTo();
      }}
     />
   </Appbar>
   );
  
}
 

export default MainAppBar;

