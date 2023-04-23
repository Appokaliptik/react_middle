import { addCommentFormScheme } from '@/features/addCommentForm';
import { addCommentFormReducer, addCommentFormActions } from '@/features/addCommentForm/models/slices/addCommentFormSlice';

describe('addCommentForArticle test', () => {
  test('add new comment', () => {
    const state: DeepPartial<addCommentFormScheme> = {
      text: '',
    };
    expect(addCommentFormReducer(
      state as addCommentFormScheme,
      addCommentFormActions.setText('new comment'),
    )).toEqual({ text: 'new comment' });
  }); test('add new comment', () => {
    const state: DeepPartial<addCommentFormScheme> = {
      text: '',
    };
    expect(addCommentFormReducer(
      state as addCommentFormScheme,
      addCommentFormActions.setText('new comment'),
    )).toEqual({ text: 'new comment' });
  });
});
