import { classNames } from 'shared/libs/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(cls.Navbar, {}, [className])}>
    <div className={cls.navLink}>
      <AppLink theme={AppLinkTheme.INVERTED} to="/">Главная</AppLink>
      <AppLink theme={AppLinkTheme.INVERTED} to="/about">О сайте</AppLink>
    </div>
  </div>
);
