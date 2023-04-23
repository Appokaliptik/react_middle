import { DeepPartial } from '@reduxjs/toolkit';
import { StateScheme } from '@/app/providers/StoreProvider';
import { GetCounterValue } from './GetCounterValue';

describe('GetCouterValue', () => {
  test('should return counter', () => {
    const state: DeepPartial<StateScheme> = {
      counter: { value: 10 },
    };
    expect(GetCounterValue(state as StateScheme)).toEqual(10);
  });
});
