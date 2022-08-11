import React, {FC} from 'react';
import {Text, View} from 'react-native';
import Styles from '../styles/Styles';

interface Header {
    title:string;
}

const ScreenHeader: FC<Header> = props => {

    return (
        <View style={Styles.screenHeader}>
            <Text>
                {props.title}
            </Text>
        </View>
    );

}

export default ScreenHeader;