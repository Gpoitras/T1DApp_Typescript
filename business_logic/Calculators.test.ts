import {expect, test} from 'vitest';
import {CalculateInsulin} from './CalculatorFunctions';

interface Result {
    insulin: number;
    prebolus: number,
    split: boolean
}

test('calculateCorrectlyWithTargetBGAndNoFactors', () => {

    let expectedResult: Result = {
        insulin: 2,
        prebolus: 15,
        split: false
    }

    var actualResult = CalculateInsulin(20, false, false, 6, 'Normal', false);
    
    expect(actualResult).toStrictEqual(expectedResult);

});


test('roundsCorrectlyWithTargetBGAndNoFactors', () => {

    let expectedResult: Result = {
        insulin: 1.5,
        prebolus: 15,
        split: false
    }

    var actualResult = CalculateInsulin(20, true, false, 6, 'Normal', false);
    
    expect(actualResult).toStrictEqual(expectedResult);

});
