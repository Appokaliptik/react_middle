import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { memo, type FC } from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import IconLight from 'shared/assets/icons/theme-light.svg';
import IconDark from 'shared/assets/icons/theme-dark.svg';
import { Button, ButtonSize, ButtonVariant } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo((
  { className }: ThemeSwitcherProps,
) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      theme={ButtonVariant.CLEAR}
      onClick={toggleTheme}
      size={ButtonSize.XL}
    >
      {theme === Theme.DARK ? <IconDark /> : <IconLight />}

    </Button>
  );
});
