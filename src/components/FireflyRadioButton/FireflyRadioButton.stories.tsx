import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FireflyRadioButton from './FireflyRadioButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Firefly/FireflyRadioButton',
  component: FireflyRadioButton,
} as ComponentMeta<typeof FireflyRadioButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FireflyRadioButton> = (args) => <FireflyRadioButton {...args} />;

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