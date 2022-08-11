import React, {FC} from 'react';
import {View} from 'react-native';
import Styles from '../styles/Styles';

interface Body {
    children: any;
}

const ScreenBody: FC<Body> = props => {

    return (

        <View style={Styles.screenBody}>
            {props.children}
        </View>


    );
}


export default ScreenBody;