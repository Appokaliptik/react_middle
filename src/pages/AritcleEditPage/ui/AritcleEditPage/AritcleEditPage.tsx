import { classNames } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import { useParams } from 'react-router-dom';
import cls from './AritcleEditPage.module.scss';

interface AritcleEditPageProps {
  className?: string;
}

const AritcleEditPage = memo((props: AritcleEditPageProps) => {
  const { className } = props;
  const { t } = useTranslation('articles_details');
  const { id } = useParams();
  return (
    <Page className={classNames(cls.AritcleEditPage, {}, [className])}>
      {t('Edit page header') + id}
    </Page>
  );
});

export default AritcleEditPage;
