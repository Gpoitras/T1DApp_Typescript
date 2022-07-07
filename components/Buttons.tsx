/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, {FC} from 'react';
import {useEffect} from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import Styles from '../styles/Styles';

interface Button {
  text: string;
  style: any;
  onPress: () => void;
  disabled: boolean;
}

const Buttons: FC<Button> = props => {
  useEffect(() => {}, []);
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={{
          backgroundColor: !props.disabled ? '#F5F5DC' : '#F5DEB3',
          width: '80%',
          elevation: 5,
          justifyContent: 'center',
          alignContent: 'center',
          marginLeft: 27,
          height: 38,
          marginTop: 10,
        }}
        onPress={() => {
          props.onPress();
        }}>
          {props.text}
      </TouchableOpacity>
    </SafeAreaView>
  );
};


export default Buttons;
