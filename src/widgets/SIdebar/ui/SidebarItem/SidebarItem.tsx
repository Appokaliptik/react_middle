import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/libs/classNames/classNames';
import { memo } from 'react';
import cls from './SidebarItem.module.scss';
import { SidebarItemTypes } from '../../model/types/SidebarItemTypes';

interface SidebarItemProps {
  item: SidebarItemTypes,
  collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();
  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
      className={classNames(cls.item, { [cls.collapsed]: collapsed })}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>
        {t(item.text)}
      </span>

    </AppLink>
  );
});
