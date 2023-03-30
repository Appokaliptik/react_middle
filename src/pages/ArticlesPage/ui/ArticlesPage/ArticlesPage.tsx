import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Articles';
import {
  memo, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/libs/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/libs/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/libs/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/libs/hooks/useInitialEffect/useInitialEffect';
import { Page } from 'widgets/Page/Page';
import { initArticlesPage } from '../../models/services/initArticlesPage/initArticlesPage';
import {
  getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView,
} from '../../models/selectors/articlesPageSelectors';
import { fetchNextArticlesPage } from '../../models/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../models/slices/articlesPageSlice';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}
const reducers: ReducersList = {
  ArticlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const error = useSelector(getArticlesPageError);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  }, [dispatch]);

  const onLoadNextPart = useCallback(() => {
    if (__PROJECT !== 'storybook') {
      dispatch(fetchNextArticlesPage());
    }
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage());
  });

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames(cls.ArticlesPage, {}, [className])}
      >
        {t('ArticlesPage header')}
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList
          view={view}
          isLoading={isLoading}
          articles={articles}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
