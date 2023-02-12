import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.navLink}>
        <AppLink theme={AppLinkTheme.INVERTED} to="/">
          {t('Меню главная')}

        </AppLink>
        <AppLink theme={AppLinkTheme.INVERTED} to="/about">
          {t('Меню о сайте')}

        </AppLink>
      </div>
    </div>
  );
};
