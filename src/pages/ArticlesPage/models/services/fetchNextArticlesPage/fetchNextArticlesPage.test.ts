import { TestAsyncThunk } from 'shared/libs/tests/testAsyncThunk/testAsyncThunk';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlesPage', () => {
  test('correct', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      ArticlesPage: {
        page: 2,
        entities: {},
        isLoading: false,
        hasMore: true,
        ids: [],
        limit: 5,
      },
    });

    const result = await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
  });
  test('wrong hasMore', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      ArticlesPage: {
        page: 2,
        entities: {},
        isLoading: false,
        hasMore: false,
        ids: [],
        limit: 5,
      },
    });

    const result = await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toBeCalled();
  });
  test('wrong isLoading', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      ArticlesPage: {
        page: 2,
        entities: {},
        isLoading: true,
        hasMore: true,
        ids: [],
        limit: 5,
      },
    });

    const result = await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toBeCalled();
  });
});
