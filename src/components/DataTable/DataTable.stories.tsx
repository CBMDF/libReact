import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DataTable from ".";

export default {
  title: "Data/DataTable",
  component: DataTable,
} as ComponentMeta<typeof DataTable>;

const Template: ComponentStory<typeof DataTable> = (args) => (
  <DataTable {...args} />
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
