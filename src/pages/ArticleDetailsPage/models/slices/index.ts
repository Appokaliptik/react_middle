import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageScheme } from '../types';
import {
  articleDetailsPageRecommendationsReducer,
} from './articleDetailsPageRecommendationsSlice';
import { ArticleDetailsCommentsReducer } from './articleDetailsCommentsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageScheme>({
  recommendations: articleDetailsPageRecommendationsReducer,
  comments: ArticleDetailsCommentsReducer,
});
