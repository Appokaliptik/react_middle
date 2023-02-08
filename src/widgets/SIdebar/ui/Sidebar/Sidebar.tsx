import { useState } from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import { LangSwithcer } from 'shared/ui/LangSwithcer/LangSwithcer';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  function onToggle() {
    setCollapsed((prev) => !prev);
  }
  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <button
        onClick={onToggle}
      >
        toggle
      </button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwithcer className={cls.lang} />
      </div>
    </div>
  );
};
