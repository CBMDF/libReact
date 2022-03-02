import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FireflyCard from "../FireflyCard";
import DropdownWithLabel from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "FORMS/DropdownWithLabel",
  component: DropdownWithLabel,
} as ComponentMeta<typeof DropdownWithLabel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof DropdownWithLabel> = (args) => {
  const [text, setText] = useState<string>();
  const options = [
    { label: "Tipo A", value: "A" },
    { label: "Tipo B", value: "B" },
    { label: "Tipo C", value: "C" },
    { label: "Tipo D", value: "D" },
  ];

  return (
    <div className="flex flex-col items-end w-full pl-5 space-y-10">
      <div className="w-full bg-yellow-100">
        Esse Input é controlado, ou seja, você precisa fornecer o "value" o o
        método "onChange".
      </div>
      <DropdownWithLabel
        {...args}
        options={options}
        name="tipo"
        label="Tipo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <FireflyCard fullWidth title="SAÍDA">
        <p>{JSON.stringify(text)}</p>
      </FireflyCard>
    </div>
  );
};
