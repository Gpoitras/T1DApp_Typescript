import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ScreenModel from './components/ScreenModel';
import InsulinCalculator from './components/InsulinCalculator';
import BolusList from './components/BolusList';
import Styles from './styles/Styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function myTabBar(state: any, descriptors: any, navigation: any) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={Styles.mainAppBar}
          >
            <Text style={{ backgroundColor: isFocused ? 'oldlace' : '#f4511e',
                            color :  isFocused ? '#f4511e' : 'oldlace',
                            height: '100%',
                            textAlign: 'center',
                            fontWeight: isFocused ? 'bold' : 'normal' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}


const Tab = createBottomTabNavigator();

const App = () => {
  return  (
  
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarActiveTintColor: '#e91e63',
        }}
        tabBar={(props) => myTabBar(props.state, props.descriptors, props.navigation)}
        >

        <Tab.Screen name="InsulinCalculator" 
                    options={{ 
                      title: "Insulin Calculator",
                      tabBarLabel: 'Insulin Calculator',
                      tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="rocket" size={30} color="#900" />
                      ), }}>
          {(props) => 
            <ScreenModel 
              children={<InsulinCalculator />} 
            />
          }
        </Tab.Screen>

        <Tab.Screen name="BolusList" 
                    options={{ 
                      title: "Bolus List",
                      tabBarLabel: 'Bolus List',
                      tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="rocket" size={30} color="#900" />
                      ), }}>
          {(props) => 
            <ScreenModel 
              children={<BolusList />} 
            />
          }
        </Tab.Screen>

      </Tab.Navigator>
    </NavigationContainer>
    
  );
};

export default App;
