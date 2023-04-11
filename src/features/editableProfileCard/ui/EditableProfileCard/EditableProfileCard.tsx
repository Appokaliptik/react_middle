import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { ProfileCard } from 'entities/Profile';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch/useAppDispatch';
import { VStack } from 'shared/ui/Stack';
import { classNames } from 'shared/libs/classNames/classNames';
import { useInitialEffect } from 'shared/libs/hooks/useInitialEffect/useInitialEffect';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { DynamicModuleLoader, ReducersList } from 'shared/libs/components/DynamicModuleLoader';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { profileActions, profileReducer } from '../../model/slices/profileSlice';
import { ValidateProfileError } from '../../model/types/editableProfileCardScheme';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';

interface EditableProfileCardProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { className, id } = props;
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const errors = useSelector(getProfileValidateErrors);

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  const validateErrorsTranslates = {
    [ValidateProfileError.INCORRECT_AGE]: t('incorrect age'),
    [ValidateProfileError.INCORRECT_CITY]: t('incorrect  city'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('incorrect user data'),
    [ValidateProfileError.NO_DATA]: t('incorrect data'),
    [ValidateProfileError.SERVER_ERROR]: t('incorrect server error'),
  };

  const onChangeFirst = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ first: value || '' }));
  }, [dispatch]);

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value || '' }));
  }, [dispatch]);

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value?.replace(/\D/gi, '') || 0) }));
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value || '' }));
  }, [dispatch]);

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value || '' }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value || '' }));
  }, [dispatch]);

  const onChangeCurrency = useCallback((currency: Currency) => {
    dispatch(profileActions.updateProfile({ currency }));
  }, [dispatch]);

  const onChangeCountry = useCallback((country: Country) => {
    dispatch(profileActions.updateProfile({ country }));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <VStack
        gap="16"
        max
        className={classNames('', {}, [className])}
      >

        <EditableProfileCardHeader />
        {errors?.length && errors.map((item) => (
          <Text
            theme={TextTheme.ERROR}
            text={validateErrorsTranslates[item]}
            key={item}
            data-testid="EditableProfileCard.Error"
          />
        ))}

        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFirst={onChangeFirst}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </VStack>
    </DynamicModuleLoader>
  );
});
