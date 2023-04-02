import { getUserAuthData } from 'entities/User';
import { UserActions, UserSlice } from 'entities/User/model/slice/UserSlice';
import { LoginModal } from 'features/AuthByUsername';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/libs/classNames/classNames';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import Logo from 'shared/assets/icons/logo.svg';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/AppRoutes/AppRoutes';
import { Text, TextTheme } from 'shared/ui/Text/Text';
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
      <header className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.logoContainer}>
          <AppLink
            className={cls.logo}
            to={RoutePath.main}
          >
            <Icon Svg={Logo} />
            <Text text="SIMTU" theme={TextTheme.INVERTED} />
          </AppLink>
        </div>
        <AppLink
          className={cls.createBtn}
          to={RoutePath.article_create}
          theme={AppLinkTheme.SECONDARY}
        >
          {t('Create Article')}
        </AppLink>
        <div className={cls.links}>
          <Button
            className={cls.links}
            theme={ButtonVariant.CLEAR_INVERTED}
            onClick={onLogout}
          >
            {t('logout')}
          </Button>
        </div>
      </header>
    );
  }

  return (

    <header className={classNames(cls.Navbar, {}, [className])}>
      <Icon Svg={Logo} />
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

    </header>
  );
});
