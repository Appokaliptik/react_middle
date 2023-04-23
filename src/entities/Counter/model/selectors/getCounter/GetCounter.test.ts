import { DeepPartial } from '@reduxjs/toolkit';
import { StateScheme } from '@/app/providers/StoreProvider';
import { GetCounter } from './GetCounter';

describe('GetCouter', () => {
  test('should return counter', () => {
    const state: DeepPartial<StateScheme> = {
      counter: { value: 7 },
    };
    expect(GetCounter(state as StateScheme)).toEqual({ value: 7 });
  });
});
