/* eslint-disable semi */
/* eslint-disable prettier/prettier */

import React, {FC} from 'react';
import {Text, Switch, View } from 'react-native';
import Styles from '../styles/Styles';

interface GenericSwitch {
    displayedText: string;
    onValueChange: () => void;
    value: boolean;
}

const GenericSwitch: FC<GenericSwitch> = props => {
    const textToDisplay = props.displayedText;

    return (
      <View style={Styles.row}>
        <Text>{textToDisplay}</Text>
        <Switch
          style={Styles.toggle}
          trackColor={{ false: 'gray', true: 'limegreen' }}
          thumbColor="white"
          onValueChange={props.onValueChange}
          value={props.value}
        />
      </View>
    );
}

export default GenericSwitch;
