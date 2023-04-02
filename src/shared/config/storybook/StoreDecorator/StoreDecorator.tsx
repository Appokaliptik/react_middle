import { Story } from '@storybook/react';
import { StateScheme, StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'entities/Articles/models/slice/ArticleSlice';
import { profileReducer } from 'entities/Profile';
import { addCommentFormReducer } from 'features/addCommentForm/models/slices/addCommentFormSlice';

import { loginReducer } from 'features/AuthByUsername/model/slice/LoginSlice';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/models/slices';
import { ReducersList } from 'shared/libs/components/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
  LoginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  ArticleDetailsPages: articleDetailsPageReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateScheme>,
  asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <StoryComponent />
  </StoreProvider>
);
