/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {FC} from 'react';
import {Text, View, TouchableOpacity } from 'react-native';
import Styles from '../styles/Styles';

interface GenericRowButtons {
  label: string;
  values : any[];
  selectedValue : any,
  setSelectedValue : (params: any) => any,
}

const GenericRowButtons: FC<GenericRowButtons> = props => (
   
    <View style={{ padding: 10 }}>
      <Text style={Styles.label}>{props.label}</Text>
      <View style={Styles.row}>
        {props.values.map((value) => (
          <TouchableOpacity
            key={value}
            onPress={() => props.setSelectedValue(value)}
            style={[
              Styles.rowButton,
              props.selectedValue === value && Styles.selected,
            ]}
          >
            <Text
              style={[
                Styles.buttonLabel,
                props.selectedValue === value && Styles.selectedLabel,
              ]}
            >
              {value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
    
  );
  
  export default GenericRowButtons;

