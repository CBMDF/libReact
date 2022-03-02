import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import FireflyCard from "../FireflyCard";
import FireflyButton from "../FireflyButton";
import TextFieldWithLabel from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "FORMS/TextFieldWithLabel",
  component: TextFieldWithLabel,
} as ComponentMeta<typeof TextFieldWithLabel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof TextFieldWithLabel> = (args) => {
  const [value, setValue] = React.useState<string>("");

  return (
    <div className="flex flex-col items-center space-y-10">
      <div className="w-full bg-yellow-100">
        Esse Input é controlado, ou seja, você precisa fornecer o "value" o o
        método "onChange".
      </div>
      <TextFieldWithLabel
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <FireflyCard title="SAÍDA">
        <p>{value}</p>
      </FireflyCard>
    </div>
  );
};

Template.args = {
  label: "ENTRADA",
  helperText: "Digite algo aqui",
  variant: "filled",
  required: true,
};
