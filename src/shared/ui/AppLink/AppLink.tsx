import { type FC } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { classNames } from 'shared/libs/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted'
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    className,
    to,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;
  return (
    <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
      {children}
    </Link>
  );
};
