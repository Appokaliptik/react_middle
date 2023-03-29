import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { Comments } from 'entities/Comments';
import { StateScheme } from 'app/providers/StoreProvider';
import { ArticleDetailsCommentsScheme } from '../types/ArticleDetailsCommentsScheme';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const commentsAdapter = createEntityAdapter<Comments>({
  // Assume IDs are stored in a field other than `book.id`
  selectId: (comment) => comment.id,
});
// Can create a set of memoized selectors based on the location of this entity state
export const getArticleComments = commentsAdapter.getSelectors<StateScheme>(
  (state) => state.ArticleDetailsComments || commentsAdapter.getInitialState(),
);

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsComments',
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsScheme>({
    error: undefined,
    isLoading: false,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Comments[]>) => {
        state.isLoading = false;
        commentsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },

});

export const { reducer: ArticleDetailsCommentsReducer } = articleDetailsCommentsSlice;