import { TextField } from "@mui/material";
import clsx from "clsx";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const DynamicLabel = (props: {
  labelPosition?: "top" | "side";
  label?: string;
  required?: boolean;
}) => {
  return (
    <span
      className={clsx(
        "text-sm",
        props.labelPosition === "top" ? "w-full" : "w-28 pr-5"
      )}
    >
      {`${props.label}${props.required ? "*" : ""}:`}
    </span>
  );
};

export interface TextFieldWithLabelProps {
  name: string;
  label?: string;
  disabled?: boolean;
  labelPosition?: "top" | "side";
  type?: "number" | "text" | "date";
  required?: boolean;
  loading?: boolean;
  helperText?: string;
  variant: "standard" | "outlined" | "filled";
}

const TextFieldWithLabel = (props: TextFieldWithLabelProps) => {
  const methods = useFormContext();

  return (
    <div
      className={clsx(
        "flex items-center justify-between w-full pt-2",
        props.labelPosition === "top" ? "flex-col text-left" : "flex-row"
      )}
    >
      {props.label && (
        <DynamicLabel
          labelPosition={props.labelPosition}
          label={props.label}
          required={props.required}
        />
      )}

      {props.loading ? (
        <div className="min-w-full md:min-w-[33%] h-14 rounded-md bg-slate-200 animate-pulse" />
      ) : (
        <div className="min-w-full md:min-w-[33%]">
          <Controller
            control={methods.control}
            name={props.name}
            rules={{ required: props.required ? props.required : false }}
            render={({ field }) => (
              <>
                {
                  <TextField
                    onChange={field.onChange}
                    label={props.label}
                    variant={props.variant}
                    helperText={props.helperText}
                    required={props.required}
                    disabled={props.disabled}
                  />
                }
              </>
            )}
          />
        </div>
      )}
    </div>
  );
};

export default TextFieldWithLabel;
