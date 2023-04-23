import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/libs/classNames/classNames';
import { Dropdown } from '@/shared/ui/Popups';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import {
  UserActions, getUserAuthData, isAdmin, isManager,
} from '@/entities/User';
import { RoutePath } from '@/shared/config/AppRoutes/AppRoutes';

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isUserAdmin = useSelector(isAdmin);
  const isUserManager = useSelector(isManager);
  const authData = useSelector(getUserAuthData);

  const isAdminPanel = isUserAdmin || isUserManager;

  const onLogout = useCallback(() => {
    dispatch(UserActions.logout());
  }, [dispatch]);

  if (!authData) {
    return null;
  }

  return (
    <Dropdown
      className={classNames('', {}, [className])}
      trigger={<Avatar size={30} src={authData.avatar} />}
      direction="bottom left"
      items={[
        ...(isAdminPanel ? [{
          content: t('Admin'),
          href: RoutePath.admin_panel,
        }] : []),
        {
          content: t('profile'),
          href: RoutePath.profile + authData.id,
        },
        {
          content: t('logout'),
          onClick: onLogout,
        },
      ]}
    />
  );
});
