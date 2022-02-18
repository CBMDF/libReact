import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DataTable from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Data/DataTable",
  component: DataTable,
} as ComponentMeta<typeof DataTable>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DataTable> = (args) => (
  <DataTable {...args} />
);

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
  // label: 'Hello world',
  // variant: 'contained'
};
