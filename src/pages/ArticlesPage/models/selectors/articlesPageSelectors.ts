import { StateScheme } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Articles';

export const getArticlesPageIsLoading = (state: StateScheme) => state.ArticlesPage?.isLoading || false;
export const getArticlesPageError = (state: StateScheme) => state.ArticlesPage?.error;
export const getArticlesPageView = (state: StateScheme) => state.ArticlesPage?.view || ArticleView.TILE;
export const getArticlesPageNum = (state: StateScheme) => state.ArticlesPage?.page || 1;
export const getArticlesPageLimit = (state: StateScheme) => state.ArticlesPage?.limit || 9;
export const getArticlesPageHasMore = (state: StateScheme) => state.ArticlesPage?.hasMore;
