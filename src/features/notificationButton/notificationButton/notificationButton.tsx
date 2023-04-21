import { NotificationList } from 'entities/Notification';
import { memo, useCallback, useState } from 'react';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { classNames } from 'shared/libs/classNames/classNames';
import { Icon } from 'shared/ui/Icon/Icon';
import { Popover } from 'shared/ui/Popups/ui/Popover/Popover';
import { BrowserView, MobileView } from 'react-device-detect';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import cls from './notificationButton.module.scss';

interface notificationButtonProps {
  className?: string;
}

export const NotificationButton = memo((props: notificationButtonProps) => {
  const { className } = props;
  const [isOpen, setIsOpen] = useState(false);

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const trigger = (
    <Button onClick={onOpenDrawer} theme={ButtonVariant.CLEAR}>
      <Icon Svg={NotificationIcon} inverted />
    </Button>
  );

  return (
    <>
      <BrowserView>
        <Popover
          className={classNames(cls.NotificationButton, {}, [className])}
          direction="bottom left"
          trigger={trigger}
        >
          <NotificationList className={cls.notifications_pc} />
        </Popover>
      </BrowserView>
      <MobileView>
        {trigger}
        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
          <NotificationList className={cls.notifications_mob} />
        </Drawer>
      </MobileView>
    </>
  );
});
