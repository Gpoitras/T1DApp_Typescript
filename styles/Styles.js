/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {StyleSheet } from 'react-native';

const mainColor = 'limegreen';
const backgroundColor = '#171a24';

const Styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    button: {
      alignItems: 'center',
      backgroundColor: mainColor,
      padding: 10,
      margin: 20,
    },
    toggle: {
      padding: 5,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    rowButton: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: 'oldlace',
        alignSelf: 'flex-start',
        marginHorizontal: '1%',
        marginBottom: 6,
        minWidth: '30%',
        textAlign: 'center',
    },
    selected: {
        backgroundColor: 'coral',
        borderWidth: 0,
    },
    
    buttonLabel: {
        fontSize: 12,
        fontWeight: '500',
        color: 'coral',
    },
    selectedLabel: {
        color: 'white',
    },
    label: {
        textAlign: 'center',
        marginBottom: 10,
    },
   
    headers: {
        textAlign: 'center',
        fontSize: 18,
        height: 75,
      },
    buttonStyle: {
        textAlign: 'left',
        fontSize: 17,
        marginLeft: 8,
    }, 
    screenModel: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: backgroundColor
    },
    screenHeader: {
      flex: 2,
      width:'100%', 
      backgroundColor: mainColor,
      justifyContent: 'center',
      alignItems: 'center',
    },
    screenHeaderText: {
      color: 'black'
    },
    screenBody: {
      flex: 12,
      paddingTop: 30,
      paddingBottom: 30,
    },
    mainAppBar: {
      flex: 1,
      backgroundColor: mainColor,
      width: '100%'
    },
  });

  export default Styles;

