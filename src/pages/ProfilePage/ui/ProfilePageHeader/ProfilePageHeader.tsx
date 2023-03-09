import { classNames } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile');

  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <div className={cls.header}>
        <Text
          title={t('profile page')}
        />
        {readonly
          ? (
            <Button
              theme={ButtonVariant.OUTLINE}
              className={cls.editBtn}
              onClick={onEdit}
            >
              {t('edit')}
            </Button>
          )
          : (
            <>
              <Button
                theme={ButtonVariant.OUTLINE}
                className={cls.editBtn}
                onClick={onSave}
              >
                {t('Save')}
              </Button>
              <Button
                theme={ButtonVariant.OUTLINE_RED}
                className={cls.cancelEditBtn}
                onClick={onCancelEdit}
              >
                {t('Cancel')}
              </Button>
            </>
          )}

      </div>
    </div>
  );
};
