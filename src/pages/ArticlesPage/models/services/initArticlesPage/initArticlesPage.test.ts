import { TestAsyncThunk } from 'shared/libs/tests/testAsyncThunk/testAsyncThunk';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { initArticlesPage } from './initArticlesPage';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage', () => {
  test('correct', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      ArticlesPage: {
        page: 1,
        entities: {},
        isLoading: false,
        hasMore: true,
        ids: [],
        limit: 5,
        _inited: false,
      },
    });

    const result = await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticlesList).toHaveBeenCalledWith({ page: 1 });
  });
  test('wrong inited', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      ArticlesPage: {
        page: 1,
        entities: {},
        isLoading: false,
        hasMore: true,
        ids: [],
        limit: 5,
        _inited: true,
      },
    });

    const result = await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toBeCalled();
  });
});
