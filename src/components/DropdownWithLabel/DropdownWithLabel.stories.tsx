import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import DropdownWithLabel from ".";
import { FireflyButton } from "..";
import FireflyCard from "../FireflyCard";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Firefly/DropdownWithLabel",
  component: DropdownWithLabel,
} as ComponentMeta<typeof DropdownWithLabel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof DropdownWithLabel> = (args) => {
  const methods = useForm();
  const [text, setText] = useState<string>();
  const options = [
    { label: "Tipo A", value: "A" },
    { label: "Tipo B", value: "B" },
    { label: "Tipo C", value: "C" },
    { label: "Tipo D", value: "D" },
  ];

  const onSubmit = (data: any) => {
    console.log(methods.formState.errors);
    setText(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="flex flex-col items-end pl-5 space-y-5">
          <DropdownWithLabel
            {...args}
            options={options}
            name="tipo"
            label="Tipo"
          />
          <FireflyButton
            label="Submit"
            type="submit"
            variant="confirm"
            className="w-20"
          />
          {text && (
            <FireflyCard fullWidth>
              <p>{JSON.stringify(text)}</p>
            </FireflyCard>
          )}
        </div>
      </form>
    </FormProvider>
  );
};
