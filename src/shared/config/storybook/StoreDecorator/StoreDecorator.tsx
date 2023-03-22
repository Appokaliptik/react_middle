import { Story } from '@storybook/react';
import { StateScheme, StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'entities/Articles/models/slice/ArticleSlice';
import { profileReducer } from 'entities/Profile';

import { loginReducer } from 'features/AuthByUsername/model/slice/LoginSlice';
import { ArticleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/models/slices/articleDetailsCommentsSlice';
import { ReducersList } from 'shared/libs/components/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
  LoginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  ArticleDetailsComments: ArticleDetailsCommentsReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateScheme>,
  asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <StoryComponent />
  </StoreProvider>
);
