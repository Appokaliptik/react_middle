import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsScheme } from 'entities/Articles/models/types/ArticleDetailsScheme';
import { CounterScheme } from 'entities/Counter';
import { ProfileScheme } from 'entities/Profile';
import { UserScheme } from 'entities/User';
import { LoginScheme } from 'features/AuthByUsername';
import { NavigateOptions, To } from 'react-router-dom';

export interface StateScheme {
  counter: CounterScheme,
  user: UserScheme,
  // async
  LoginForm?: LoginScheme,
  profile?: ProfileScheme,
  articleDetails?: ArticleDetailsScheme,
}

export type StateSchemeKey = keyof StateScheme;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateScheme>,
  reduce: (state: StateScheme, action: AnyAction) => CombinedState<StateScheme>,
  add: (key: StateSchemeKey, reducer: Reducer) => void,
  remove: (key: StateSchemeKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateScheme> {
  reducerManager: ReducerManager
}

export interface ThunkExtraType {
  api: AxiosInstance,
  navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
  rejectValue: T,
  extra: ThunkExtraType,
  state: StateScheme
}
