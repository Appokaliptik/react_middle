import { getUserAuthData } from 'entities/User';
import { UserActions, UserSlice } from 'entities/User/model/slice/UserSlice';
import { LoginModal } from 'features/AuthByUsername';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/libs/classNames/classNames';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(UserActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
          <Button
            className={cls.links}
            theme={ButtonVariant.CLEAR_INVERTED}
            onClick={onLogout}
          >
            {t('logout')}
          </Button>
        </div>
      </div>
    );
  }

  return (

    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <Button
          className={cls.links}
          theme={ButtonVariant.CLEAR_INVERTED}
          onClick={onShowModal}
        >
          {t('login')}
        </Button>
      </div>
      {isAuthModal
        && (
          <LoginModal
            isOpen={isAuthModal}
            onClose={onCloseModal}
          />
        )}

    </div>
  );
});
