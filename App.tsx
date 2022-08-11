import React from 'react';
import ScreenModel from './components/ScreenModel';
import InsulinCalculator from './components/InsulinCalculator';

const App = () => {
  return  (
  
    <ScreenModel 
      screenTitle='Insulin Calculator' 
      children={<InsulinCalculator />} 
    />
  );
};

export default App;
