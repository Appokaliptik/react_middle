import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs/classNames/classNames';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        className={cls.input}
        placeholder={t('Input name')}
      />
      <Input
        className={cls.input}
        placeholder={t('Input password')}
      />
      <Button
        type="submit"
        theme={ButtonVariant.BACKGROUND_INVERTED}
        className={cls.loginBtn}
      >
        {t('Login')}
      </Button>
    </div>
  );
};
