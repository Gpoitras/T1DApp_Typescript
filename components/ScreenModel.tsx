/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import {View} from 'react-native';
import Styles from '../styles/Styles';
import MainAppBar from './MainAppBar';
import ScreenHeader from './ScreenHeader';
import ScreenBody from './ScreenBody';

interface ScreenModel {
  navigateTo: any;
  screenTitle: string;
  children: any;
}

const ScreenModel: FC<ScreenModel> = props => {
  return (
    <View style={Styles.screenModel}>
      <ScreenHeader title={props.screenTitle}/>
      <ScreenBody children={props.children} />
      <MainAppBar navigateTo={props.navigateTo} />
    </View>
  );
}

export default ScreenModel;
