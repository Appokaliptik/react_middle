import { ComponentStory, ComponentMeta } from '@storybook/react';
import image from './storybook.png';
import { Avatar } from './Avatar';

export default {
  title: 'Shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: image,
};

export const Small = Template.bind({});
Small.args = {
  src: image,
  size: 50,
};
