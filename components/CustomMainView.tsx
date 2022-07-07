/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import {View} from 'react-native';
import Styles from '../styles/Styles';
import MainAppBar from './MainAppBar';

interface ScreenModel {
  children: any;
}

const ScreenModel: FC<ScreenModel> = props => {
  return (
    <View style={Styles.screenModel}>
      {props.children}
      <MainAppBar />
    </View>
  );
}

export default ScreenModel;
