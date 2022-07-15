import {expect, test} from 'vitest';
import CalculateInsulin from '../business_logic/Calculators';

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

    var actualResult = CalculateInsulin(20, false, false, 6, 
        'Normal', false);
    
    expect(actualResult).toStrictEqual(expectedResult);

});

