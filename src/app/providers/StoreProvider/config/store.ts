import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { UserReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername';
import { StateScheme } from './StateScheme';

export function createReduxStore(initialState?: StateScheme) {
  const rootReducers: ReducersMapObject<StateScheme> = {
    counter: counterReducer,
    user: UserReducer,
    LoginForm: loginReducer,
  };

  return configureStore<StateScheme>({
    reducer: rootReducers,
    devTools: __IS_DEV,
    preloadedState: initialState,

  });
}
