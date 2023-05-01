import { Story } from '@storybook/react';
import { StateScheme, StoreProvider } from '@/app/providers/StoreProvider';
// eslint-disable-next-line appo-fsd-plugin/public-api-imports
import { articleDetailsReducer } from '@/entities/Articles/models/slice/ArticleSlice';
// eslint-disable-next-line appo-fsd-plugin/public-api-imports
import { addCommentFormReducer } from '@/features/addCommentForm/models/slices/addCommentFormSlice';
// eslint-disable-next-line appo-fsd-plugin/public-api-imports
import { loginReducer } from '@/features/AuthByUsername/model/slice/LoginSlice';
// eslint-disable-next-line appo-fsd-plugin/public-api-imports
import { profileReducer } from '@/features/editableProfileCard/model/slices/profileSlice';
// eslint-disable-next-line appo-fsd-plugin/public-api-imports
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/models/slices';
import { ReducersList } from '@/shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';

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
