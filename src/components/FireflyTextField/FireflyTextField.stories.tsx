import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FireflyTextField from './FireflyTextField';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Firefly/FireflyTextField',
    component: FireflyTextField,
} as ComponentMeta<typeof FireflyTextField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FireflyTextField> = (args) => <FireflyTextField {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const TextField = Template.bind({});
TextField.args = {
    label: 'TextField!',
    variant: 'filled',
    disabled: true
};