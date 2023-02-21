import { createSelector } from '@reduxjs/toolkit';
import { CounterScheme } from 'entities/Counter';
import { GetCounter } from '../getCounter/GetCounter';

export const GetCounterValue = createSelector(
  GetCounter,
  (counter: CounterScheme) => counter.value,
);
