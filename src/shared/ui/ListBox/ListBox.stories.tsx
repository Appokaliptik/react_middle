import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ListBox } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  items: [
    { value: '1', content: 'Durward Reynolds' },
    { value: '2', content: 'Kenton Towne' },
    { value: '3', content: 'Therese Wunsch' },
    { value: '4', content: 'Benedict Kessler' },
    { value: '5', content: 'Katelyn Rohan' },
  ],
  label: 'label',
  value: 'value',

};
Normal.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];

export const DirectionTop = Template.bind({});
DirectionTop.args = {
  items: [
    { value: '1', content: 'Durward Reynolds' },
    { value: '2', content: 'Kenton Towne' },
    { value: '3', content: 'Therese Wunsch' },
    { value: '4', content: 'Benedict Kessler' },
    { value: '5', content: 'Katelyn Rohan' },
  ],
  label: 'label',
  value: 'value',
  direction: 'top',

};
DirectionTop.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];
