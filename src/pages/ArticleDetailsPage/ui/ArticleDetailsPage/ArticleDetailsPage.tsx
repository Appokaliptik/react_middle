import { classNames } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, Suspense, useCallback } from 'react';
import { ArticleDetails } from 'entities/Articles';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comments';
import { DynamicModuleLoader, ReducersList } from 'shared/libs/components/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { getArticleCommentsIsLoading } from 'pages/ArticleDetailsPage/models/selectors/comments';
import { useInitialEffect } from 'shared/libs/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/addCommentForm';
import { Loader } from 'shared/ui/Loader/Loader';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/AppRoutes/AppRoutes';
import { Page } from 'widgets/Page/Page';
import {
  addCommentForArticle,
} from '../../models/services/fetchCommentsByArticleId/addCommentForArticle/addCommentForArticle';
import {
  fetchCommentsByArticleId,
} from '../../models/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetailsCommentsReducer, getArticleComments } from '../../models/slices/articleDetailsCommentsSlice';

interface ArticleDetailsPageProps {
  className?: string;
}
const reducers: ReducersList = {
  ArticleDetailsComments: ArticleDetailsCommentsReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation('articles_details');
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const commentIsLoading = useSelector(getArticleCommentsIsLoading);
  const comments = useSelector(getArticleComments.selectAll);
  const navigate = useNavigate();

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });
  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  if (!id && __PROJECT !== 'storybook') {
    return (
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t('articles not found')}
      </Page>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <Button theme={ButtonVariant.OUTLINE} onClick={onBackToList}>
          {t('back to list')}
        </Button>
        <ArticleDetails id={id || '1'} />
        <Text title={t('Comment title')} className={cls.title} />
        <Suspense fallback={<Loader />}>
          <AddCommentForm onSendComment={onSendComment} />
        </Suspense>
        <CommentList
          comments={comments}
          isLoading={commentIsLoading}
        />
      </Page>

    </DynamicModuleLoader>
  );
};
export default memo(ArticleDetailsPage);
