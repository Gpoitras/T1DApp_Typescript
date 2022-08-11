import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ScreenModel from './components/ScreenModel';
import InsulinCalculator from './components/InsulinCalculator';
import BolusList from './components/BolusList';


const Stack = createNativeStackNavigator();

const App = () => {
  return  (
  
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InsulinCalculator" screenOptions={{headerShown: false}}>
        
        <Stack.Screen name="InsulinCalculator">
          {(props) => 
            <ScreenModel 
              navigateTo={() => props.navigation.navigate('BolusList')} 
              screenTitle='Insulin Calculator' 
              children={<InsulinCalculator />} 
            />
          }
        </Stack.Screen>

        <Stack.Screen name="BolusList">
          {(props) => 
            <ScreenModel 
              navigateTo={() => props.navigation.navigate('InsulinCalculator')} 
              screenTitle='Bolus List' 
              children={<BolusList />} 
            />
          }
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default App;
