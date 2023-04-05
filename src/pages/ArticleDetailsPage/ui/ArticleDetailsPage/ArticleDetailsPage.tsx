import { ArticleDetails, ArticleList } from 'entities/Articles';
import { CommentList } from 'entities/Comments';
import { AddCommentForm } from 'features/addCommentForm';
import { getArticleCommentsIsLoading } from 'pages/ArticleDetailsPage/models/selectors/comments';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/models/slices';
import {
  getArticleRecommendations,
} from 'pages/ArticleDetailsPage/models/slices/articleDetailsPageRecommendationsSlice';
import { Suspense, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/libs/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/libs/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/libs/hooks/useInitialEffect/useInitialEffect';
import { Loader } from 'shared/ui/Loader/Loader';
import { VStack } from 'shared/ui/Stack';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Page } from 'widgets/Page/Page';
import { getArticleRecommendationsIsLoading } from '../../models/selectors/recommendations';
import {
  fetchArticleRecommendations,
} from '../../models/services/fetchArticleRecommendations/fetchArticleRecommendations';
import {
  addCommentForArticle,
} from '../../models/services/fetchCommentsByArticleId/addCommentForArticle/addCommentForArticle';
import {
  fetchCommentsByArticleId,
} from '../../models/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../models/slices/articleDetailsCommentsSlice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}
const reducers: ReducersList = {
  ArticleDetailsPages: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation('articles_details');
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const commentIsLoading = useSelector(getArticleCommentsIsLoading);
  const comments = useSelector(getArticleComments.selectAll);
  const recommendtations = useSelector(getArticleRecommendations.selectAll);
  const recommendtationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  });
  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

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
        <VStack gap="16" max>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id || '1'} />
          <Text size={TextSize.L} title={t('Recommended')} className={cls.title} />
          <ArticleList
            articles={recommendtations}
            isLoading={recommendtationsIsLoading}
            className={cls.recommendations}
            target="_blank"
          />
          <Text size={TextSize.L} title={t('Comment title')} className={cls.title} />
          <Suspense fallback={<Loader />}>
            <AddCommentForm onSendComment={onSendComment} />
          </Suspense>
          <CommentList
            comments={comments}
            isLoading={commentIsLoading}
          />

        </VStack>
      </Page>

    </DynamicModuleLoader>
  );
};
export default memo(ArticleDetailsPage);
