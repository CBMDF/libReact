import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import FireflyCard from "../FireflyCard";
import FireflyButton from "../FireflyButton";
import { InputCalendarioAlas } from "..";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "FORMS/InputCalendarioAlas",
  component: InputCalendarioAlas,
} as ComponentMeta<typeof InputCalendarioAlas>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof InputCalendarioAlas> = (args) => {
  const methods = useForm();
  const [text, setText] = useState<string>();

  const onSubmit = (data: any) => {
    console.log(methods.formState.errors);
    setText(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="flex flex-col items-end pl-5 space-y-5">
          <InputCalendarioAlas {...args} />
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

Template.args = {
  label: "Data",
  name: "datEntrada",
};
