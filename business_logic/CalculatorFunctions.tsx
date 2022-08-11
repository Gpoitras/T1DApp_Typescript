import * as Const from './CalculatorConstants';

function getRatio(): number {
  
  var timeOfDay = new Date().getHours();

  var ratio = timeOfDay >= Const.MORNING_START_HOUR 
      && timeOfDay < Const.MORNING_END_HOUR ? 
      Const.MORNING_RATIO : Const.DAY_RATIO;

  return ratio;
}

export function CalculateInsulin (
    carbs: number,
    exercisedLatelyEnabled: boolean,
    upcomingExerciseEnabled: boolean,
    currentBG: number,
    carbType: string,
    mealIsVeryFatEnabled: boolean,
  ) {

    var ratio = getRatio();
    ratio *= exercisedLatelyEnabled ? Const.EXERCISED_IN_LAST_24H_FACTOR : 1;
    var exerciseFactor = upcomingExerciseEnabled ? Const.UPCOMING_EXERCISE_FACTOR : 1;
    var adjustmentForCurrentBG = (Const.TARGET_BG - currentBG) * Const.INSULIN_TO_BG_RATIO * -1;

    // calculate bolus
    var insulin = (carbs / ratio) * exerciseFactor + adjustmentForCurrentBG;

    // calculate prebolus delay
    var prebolus;
    switch (carbType) {
      case Const.SLOW_INSULIN_STRING:
        prebolus = Const.SLOW_CARB_PREBOLUS_MINUTES;
        break;
      case Const.FAST_INSULIN_STRING:
        prebolus = Const.FAST_CARB_PREBOLUS_MINUTES;
        break;
      default:
        prebolus = Const.NORMAL_CARB_PREBOLUS_MINUTES;
    }

    if (mealIsVeryFatEnabled) {
      prebolus -= Const.MINUTES_TO_REMOVE_IF_MEAL_FAT;
    }

    // check if bolus should be split
    var split = false;
    if (insulin > Const.INSULIN_AMOUNT_MAX_TOLERATED_THRESHOLD 
        || (mealIsVeryFatEnabled && carbType === Const.FAST_INSULIN_STRING)) {
      split = true;
      prebolus = 0;
    }

    // rounds number to nearest 0.5
    let decimal = insulin % 1;

    if (decimal >= 0.75) {
      insulin = Math.ceil(insulin);
    } else if (decimal < 0.25) {
      insulin = Math.floor(insulin);
    } else {
      insulin = Math.floor(insulin) + 0.5;
    }

    return {insulin, prebolus, split};
  };

  