import { getArticleDetailsData } from 'entities/Articles';
import { getCanEditArticle } from 'pages/ArticleDetailsPage/models/selectors/article';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/AppRoutes/AppRoutes';
import { classNames } from 'shared/libs/classNames/classNames';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import cls from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
  const { className } = props;
  const { t } = useTranslation('articles_details');
  const navigate = useNavigate();
  const canEdit = useSelector(getCanEditArticle);
  const article = useSelector(getArticleDetailsData);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePath.article_details}${article?.id}/edit`);
  }, [article?.id, navigate]);

  return (
    <HStack justify="between" max className={classNames('', {}, [className])}>
      <Button theme={ButtonVariant.OUTLINE} onClick={onBackToList}>
        {t('back to list')}
      </Button>
      {canEdit
        && (
          <Button
            theme={ButtonVariant.OUTLINE}
            onClick={onEditArticle}
          >
            {t('Edit')}
          </Button>
        )}
    </HStack>
  );
});
