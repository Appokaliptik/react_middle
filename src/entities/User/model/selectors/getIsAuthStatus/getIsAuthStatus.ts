import { StateScheme } from 'app/providers/StoreProvider';

export const getIsAuthStatus = (state: StateScheme) => state.user._isAuth;
