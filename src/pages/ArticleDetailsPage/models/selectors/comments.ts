import { StateScheme } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateScheme) => state.ArticleDetailsComments?.isLoading || false;
export const getArticleCommentsError = (state: StateScheme) => state.ArticleDetailsComments?.error;
