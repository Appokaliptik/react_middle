import { memo, useMemo, useState } from 'react';
import { classNames } from 'shared/libs/classNames/classNames';
import { Button, ButtonSize, ButtonVariant } from 'shared/ui/Button/Button';
import { LangSwithcer } from 'shared/ui/LangSwithcer/LangSwithcer';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { useSelector } from 'react-redux';
import { HStack, VStack } from 'shared/ui/Stack';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';

interface SidebarProps {
  className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemList = useSelector(getSidebarItems);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemList = useMemo(() => sidebarItemList.map((item) => (
    <SidebarItem
      item={item}
      collapsed={collapsed}
      key={item.path}
    />
  )), [collapsed, sidebarItemList]);

  return (
    <menu
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
      <VStack gap="8">
        {itemList}
      </VStack>

      <HStack gap="8" justify="center" className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwithcer short={collapsed} className={cls.lang} />
      </HStack>
    </menu>
  );
});
