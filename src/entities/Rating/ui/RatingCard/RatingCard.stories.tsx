import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RatingCard } from './RatingCard';
import { Theme } from '@/shared/const/Theme';

export default {
  title: 'entities/RatingCard',
  component: RatingCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  feedbackTitle: 'Заголовок в модалке',
  hasFeedback: true,
  title: 'Заголовок над звёздами',
};
Normal.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];
