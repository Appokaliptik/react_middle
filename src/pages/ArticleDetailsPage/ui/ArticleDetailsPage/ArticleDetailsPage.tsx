import { classNames } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Articles';
import { useParams } from 'react-router-dom';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation('articles_details');
  const { id } = useParams<{ id: string }>();

  if (!id && __PROJECT !== 'storybook') {
    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t('articles not found')}
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      <ArticleDetails id={id || '1'} />
    </div>
  );
};
export default memo(ArticleDetailsPage);
