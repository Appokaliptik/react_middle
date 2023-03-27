import { StateScheme } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Articles';

export const getArticlesPageIsLoading = (state: StateScheme) => state.ArticlesPage?.isLoading || false;
export const getArticlesPageError = (state: StateScheme) => state.ArticlesPage?.error;
export const getArticlesPageView = (state: StateScheme) => state.ArticlesPage?.view || ArticleView.TILE;
