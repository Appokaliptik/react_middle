import { NotificationList } from 'entities/Notification';
import { memo } from 'react';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { classNames } from 'shared/libs/classNames/classNames';
import { Icon } from 'shared/ui/Icon/Icon';
import { Popover } from 'shared/ui/Popups/ui/Popover/Popover';
import cls from './notificationButton.module.scss';

interface notificationButtonProps {
  className?: string;
}

export const NotificationButton = memo((props: notificationButtonProps) => {
  const { className } = props;
  return (
    <Popover
      className={classNames(cls.NotificationButton, {}, [className])}
      direction="bottom left"
      trigger={(
        <Icon Svg={NotificationIcon} inverted />
      )}
    >
      <NotificationList className={cls.notifications} />
    </Popover>
  );
});
