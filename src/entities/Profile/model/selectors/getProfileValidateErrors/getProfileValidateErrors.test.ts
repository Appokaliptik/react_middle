import { StateScheme } from 'app/providers/StoreProvider';
import { ValidateProfileError } from '../../types/Profile';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors.test', () => {
  test('should return data', () => {
    const state: DeepPartial<StateScheme> = {
      profile: {
        validateErrors: [
          ValidateProfileError.INCORRECT_CITY,
          ValidateProfileError.INCORRECT_USER_DATA,
        ],
      },

    };
    expect(getProfileValidateErrors(state as StateScheme)).toEqual([
      ValidateProfileError.INCORRECT_CITY,
      ValidateProfileError.INCORRECT_USER_DATA,
    ]);
  });
  test('should return data', () => {
    const state: DeepPartial<StateScheme> = {};
    expect(getProfileValidateErrors(state as StateScheme)).toEqual(undefined);
  });
});
