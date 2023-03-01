import { memo, useState } from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import { Button, ButtonSize, ButtonVariant } from 'shared/ui/Button/Button';
import { LangSwithcer } from 'shared/ui/LangSwithcer/LangSwithcer';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { SidebarItemList } from '../../model/types/SidebarItemTypes';

interface SidebarProps {
  className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      data-testid="sidebar"
      className={
        classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])
      }
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapsedBtn}
        theme={ButtonVariant.BACKGROUND_INVERTED}
        size={ButtonSize.XL}
        square
      >
        {collapsed ? ' >' : '<'}
      </Button>
      <div className={cls.navLink}>
        {SidebarItemList.map((item) => (
          <SidebarItem
            item={item}
            collapsed={collapsed}
            key={item.path}
          />
        ))}

      </div>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwithcer short={collapsed} className={cls.lang} />
      </div>
    </div>
  );
});
