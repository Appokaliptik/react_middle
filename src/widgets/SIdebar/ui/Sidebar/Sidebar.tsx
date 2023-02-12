import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { LangSwithcer } from 'shared/ui/LangSwithcer/LangSwithcer';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div className={
      classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])
    }
    >
      <Button
        onClick={onToggle}
      >
        {t('sidebar swtihcher')}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwithcer className={cls.lang} />
      </div>
    </div>
  );
};
