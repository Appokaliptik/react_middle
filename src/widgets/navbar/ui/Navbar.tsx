import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs/classNames/classNames';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(
    () => {
      setIsAuthModal((prev) => !prev);
    },
    [],
  );

  return (

    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <Button
          className={cls.links}
          theme={ButtonVariant.CLEAR_INVERTED}
          onClick={onToggleModal}
        >
          {t('login')}
        </Button>
      </div>
      <Modal
        isOpen={isAuthModal}
        onClose={onToggleModal}
      >
        {t('lorem')}

      </Modal>
    </div>
  );
};
