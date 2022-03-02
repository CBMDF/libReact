import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import FireflyCard from "../FireflyCard";
import FireflyButton from "../FireflyButton";
import RHFDropdownWithLabel from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "FORMS/RHFDropdownWithLabel",
  component: RHFDropdownWithLabel,
} as ComponentMeta<typeof RHFDropdownWithLabel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof RHFDropdownWithLabel> = (args) => {
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
        <div className="flex flex-col items-end w-1/2 pl-5 space-y-4">
          <RHFDropdownWithLabel
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
