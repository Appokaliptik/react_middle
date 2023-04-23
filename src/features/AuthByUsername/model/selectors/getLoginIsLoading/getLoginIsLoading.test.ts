import { StateScheme } from '@/app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading test', () => {
  test('should return false', () => {
    const state: DeepPartial<StateScheme> = {
    };
    expect(getLoginIsLoading(state as StateScheme)).toEqual(false);
  });

  test('should return true', () => {
    const state: DeepPartial<StateScheme> = {
      LoginForm: {
        isLoading: true,
      },
    };
    expect(getLoginIsLoading(state as StateScheme)).toEqual(true);
  });
});
