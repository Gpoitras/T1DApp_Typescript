/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import {View} from 'react-native';
import Styles from '../styles/Styles';
import ScreenBody from './ScreenBody';

interface ScreenModel {
  children: any;
}

const ScreenModel: FC<ScreenModel> = props => {
  return (
    <View style={Styles.screenModel}>
      <ScreenBody children={props.children} />
    </View>
  );
}

export default ScreenModel;
