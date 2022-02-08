import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FireflyButton from './FireflyButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Firefly/FireflyButton',
  component: FireflyButton,
} as ComponentMeta<typeof FireflyButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FireflyButton> = (args) => <FireflyButton {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  label: 'Hello world',
  variant: 'contained'
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  label: 'Click me!',
   variant: 'contained',
   disabled: true
};