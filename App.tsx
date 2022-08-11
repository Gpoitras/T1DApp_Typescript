import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ScreenModel from './components/ScreenModel';
import InsulinCalculator from './components/InsulinCalculator';


function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return  (
  
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InsulinCalculator" screenOptions={{headerShown: false}}>
        <Stack.Screen name="InsulinCalculator">
          {(props) => <ScreenModel navigateTo={() => props.navigation.navigate('Home')} screenTitle='Insulin Calculator' children={<InsulinCalculator />} />}
        </Stack.Screen>
        <Stack.Screen name="Home" component={HomeScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default App;
