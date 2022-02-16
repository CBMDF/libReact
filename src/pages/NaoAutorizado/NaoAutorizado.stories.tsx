import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PageNaoAutorizado from './NaoAutorizado';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Pages/NaoAutorizado',
  component: PageNaoAutorizado,
} as ComponentMeta<typeof PageNaoAutorizado>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PageNaoAutorizado> = (args) => <PageNaoAutorizado  />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  label: 'Hello world',
  variant: 'contained'
};
