import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FireflyButton from "./FireflyButton";
import { ShoppingBag } from "@mui/icons-material";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Firefly/FireflyButton",
  component: FireflyButton,
} as ComponentMeta<typeof FireflyButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FireflyButton> = (args) => (
  <FireflyButton
    {...args}
    // StartIcon={<ShoppingBag />}
    EndIcon={<ShoppingBag />}
  />
);

export const Home = Template.bind({});
Home.args = {
  label: "Home",
  variant: "info",
  rounded: "rounded-sm",
};
