import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/libs/classNames/classNames';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginActions } from '../../model/slice/LoginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const {
    username, password, isLoading, error,
  } = useSelector(getLoginState);

  const onChangeUsername = useCallback((value) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('LoginForm')} />

      {error && <Text text={t('errorForm')} theme={TextTheme.ERROR} />}
      <Input
        className={cls.input}
        placeholder={t('Input name')}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        className={cls.input}
        placeholder={t('Input password')}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        type="submit"
        theme={ButtonVariant.BACKGROUND_INVERTED}
        className={cls.loginBtn}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('Login')}
      </Button>
    </div>
  );
});
