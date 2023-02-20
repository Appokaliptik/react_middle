import { type ButtonHTMLAttributes, type FC } from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonVariant {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonVariant
  square?: boolean
  size?: string
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    square,
    size = ButtonSize.M,
    theme,
    ...otherProps
  } = props;
  const mods: Record<string, boolean> = {
    [cls.square]: square,
    [cls[size]]: true,
  };
  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
