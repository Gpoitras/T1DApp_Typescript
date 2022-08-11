/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { Text, View, TextInput, Alert } from 'react-native';
import GenericSwitch from './GenericSwitch';
import GenericRowButtons from './GenericRowButton';
import Buttons from './Buttons';
import Styles from '../styles/Styles';
import {CalculateInsulin} from '../business_logic/CalculatorFunctions';


const InsulinCalculator = () => {

  const [carbs, setCarbs] = useState('0');
  const [currentBG, setCurrentBG] = useState('0');
  const [upcomingExerciseEnabled, setUpcomingExerciseEnabled] = useState(false);
  const toggleSwitchUpcomingExercise = () => setUpcomingExerciseEnabled(previousState => !previousState);
  const [exercisedLatelyEnabled, setExercisedLatelyEnabled] = useState(false);
  const toggleSwitchExercisedLately = () => setExercisedLatelyEnabled(previousState => !previousState);
  const [mealIsVeryFatEnabled, setMealIsVeryFatEnabled] = useState(false);
  const toggleSwitchMealIsVeryFat = () => setMealIsVeryFatEnabled(previousState => !previousState);
  const [carbType, setCarbType] = useState('Normal');

  const [insulinAmount, setInsulinAmount] = useState(0);
  const [prebolusDelay, setPrebolusDelay] = useState(15);
  const [shouldSplitBolus, setShouldSplitBolus] = useState(false);

  const getInsulinAmount = () => {

    var result = CalculateInsulin(
      parseFloat(carbs),
      exercisedLatelyEnabled,
      upcomingExerciseEnabled,
      parseFloat(currentBG),
      carbType,
      mealIsVeryFatEnabled);

    setInsulinAmount(result.insulin);
    setPrebolusDelay(result.prebolus);
    setShouldSplitBolus(result.split);
  };

  return (
      <View>
        <View>
          <View style={Styles.row}>
            <Text>Enter carbs (g)</Text>
            <TextInput
              style={Styles.input}
              value={carbs}
              onChangeText={newText => setCarbs(newText)}
              placeholder="0"
              keyboardType="numeric"
            />
          </View>
          <View style={Styles.row}>
            <Text>Enter current BG</Text>
            <TextInput
              style={Styles.input}
              value={currentBG}
              onChangeText={newText => setCurrentBG(newText)}
              placeholder="0"
              keyboardType="numeric"
            />
          </View>

          <GenericSwitch
            displayedText={'Exercised lately?'}
            onValueChange={toggleSwitchExercisedLately}
            value={exercisedLatelyEnabled}
          />

          <GenericSwitch
            displayedText={'Upcoming exercise?'}
            onValueChange={toggleSwitchUpcomingExercise}
            value={upcomingExerciseEnabled}
          />

          <GenericSwitch
            displayedText={'Meal is very fat?'}
            onValueChange={toggleSwitchMealIsVeryFat}
            value={mealIsVeryFatEnabled}
          />

          <GenericRowButtons
            label="Carb Type?"
            selectedValue={carbType}
            values={['Slow', 'Normal', 'Fast']}
            setSelectedValue={setCarbType}
          />
        </View>

        <View>
            <Buttons
              text="Calculate"
              style={Styles.button}
              onPress={() => {

                try {
                  let parsedCarbs = parseFloat(carbs);
                  let parsedBG = parseFloat(currentBG);

                  if (parsedCarbs > 0 && parsedBG > 0) { 
                    getInsulinAmount();
                  } else {
                    Alert.alert("Number missing", "Please enter carbs and BG.");
                  }

                } catch (error) {
                  Alert.alert("Error", "Carbs or BG number invalid.");
                }}}

                
              disabled={false}
            />
        </View>

        <View>
          <Text>Insulin Amount : {insulinAmount.toFixed(1)} u</Text>
          <Text>Prebolus Delay : {prebolusDelay.toString()} min</Text>
          <Text>Split Bolus : {shouldSplitBolus ? 'Yes' : 'No'}</Text>
        </View>
      </View>
    );
};


export default InsulinCalculator;

