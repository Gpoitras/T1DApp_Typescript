/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';
import Styles from '../styles/Styles';

interface Header {
  title: string;
}

const HeaderClass: FC<Header> = props => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="white" />
      <Text style={Styles.headers}>{props.title}</Text>
    </SafeAreaView>
  );
};


export default HeaderClass;
