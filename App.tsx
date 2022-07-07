import React from 'react';
import ScreenModel from './components/CustomMainView';
import InsulinCalculator from './components/InsulinCalculator';

const App = () => {
  return <ScreenModel children={<InsulinCalculator />} />;
};

export default App;
