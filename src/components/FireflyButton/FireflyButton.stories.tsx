import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FireflyButton from "./FireflyButton";
import { SvgIcon } from "@mui/material";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Firefly/FireflyButton",
  component: FireflyButton,
} as ComponentMeta<typeof FireflyButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FireflyButton> = (args) => (
  <FireflyButton {...args} />
);

function HomeIcon() {
  return (
    <SvgIcon>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export const Home = Template.bind({});
Home.args = {
  label: "Home",
  variant: "info",
  StartIcon: HomeIcon,
};
