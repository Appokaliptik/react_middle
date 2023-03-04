import { StateScheme } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername test', () => {
  test('should return password', () => {
    const state: DeepPartial<StateScheme> = {
      LoginForm: {
        username: '234324324',
      },
    };
    expect(getLoginUsername(state as StateScheme)).toEqual('234324324');
  });
  test('should return empty', () => {
    const state: DeepPartial<StateScheme> = {
    };
    expect(getLoginUsername(state as StateScheme)).toEqual('');
  });
});
