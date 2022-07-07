/* eslint-disable prettier/prettier */

const CalculateInsulin = (
    carbs: number,
    exercisedLatelyEnabled: boolean,
    upcomingExerciseEnabled: boolean,
    currentBG: number,
    carbType: string,
    mealIsVeryFatEnabled: boolean,
  ) => {

    const morningRatio = 5;
    const dayRatio = 10;
    const upcomingExerciseFactor = 0.5;
    const exercisedInLast24HoursFactor = 1.2;
    const targetBG = 6.0;
    const insulinToBGRatio = 0.33;

    var timeOfDay = new Date().getHours();

    var ratio = timeOfDay < 10 ? morningRatio : dayRatio;
    ratio *= exercisedLatelyEnabled ? exercisedInLast24HoursFactor : 1;
    var exerciseFactor = upcomingExerciseEnabled ? upcomingExerciseFactor : 1;
    var adjustmentForCurrentBG = (targetBG - currentBG) * insulinToBGRatio * -1;

    // calculate bolus
    var insulin = (carbs / ratio) * exerciseFactor + adjustmentForCurrentBG;

    // calculate prebolus delay
    var prebolus;
    switch (carbType) {
      case 'Slow':
        prebolus = 0;
        break;
      case 'Fast':
        prebolus = 30;
        break;
      default:
        prebolus = 15;
    }

    if (mealIsVeryFatEnabled) {
      prebolus -= 15;
    }

    // check if bolus should be split
    var split = false;
    if (insulin > 6 || (mealIsVeryFatEnabled && carbType === 'Fast')) {
      split = true;
      prebolus = 0;
    }

    return {insulin, prebolus, split};
  };

  export default CalculateInsulin;

