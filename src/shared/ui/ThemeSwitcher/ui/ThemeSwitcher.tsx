import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { FC } from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import cls from './ThemeSwitcher.module.scss'
import IconLight from 'shared/assets/icons/theme-light.svg'
import IconDark from 'shared/assets/icons/theme-dark.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button';


interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}: ThemeSwitcherProps) => {  
  const { theme, toggleTheme } = useTheme()
  return (
    <Button 
    className={classNames(cls.ThemeSwitcher, {}, [className])}
    theme= {ThemeButton.CLEAR}
    onClick = {toggleTheme}
    >
      {theme === Theme.DARK ? <IconDark /> : <IconLight/> }
      
    </Button>
  );
};