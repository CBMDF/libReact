import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DataView from ".";

export default {
  title: "Data/DataView",
  component: DataView,
} as ComponentMeta<typeof DataView>;

const Template: ComponentStory<typeof DataView> = (args) => (
  <DataView {...args} />
);

export const Example = Template.bind({});
Example.args = {
  columns: [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
  ],
};
