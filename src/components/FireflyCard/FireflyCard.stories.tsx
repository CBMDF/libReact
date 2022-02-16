import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FireflyCard from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Firefly/FireflyCard",
  component: FireflyCard,
} as ComponentMeta<typeof FireflyCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FireflyCard> = (args) => (
  <FireflyCard {...args} />
);

function Body() {
  return (
    <div>
      <div className="text-xl font-medium text-black">ChitChat</div>
      <p className="text-slate-500">You have a new message!</p>
    </div>
  );
}

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Card = Template.bind({});
Card.args = {
  children: <Body />,
  className: "md:w-1/3",
};
