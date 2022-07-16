/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, {FC} from 'react';
import {useEffect} from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import { Text } from 'react-native-paper';

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
      style={props.style}
        onPress={() => {
          props.onPress();
        }}>
          <Text>
            {props.text}
          </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};


export default Buttons;
