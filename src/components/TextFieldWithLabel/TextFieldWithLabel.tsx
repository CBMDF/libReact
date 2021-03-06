import { TextField, TextFieldProps } from "@mui/material";
import clsx from "clsx";
import React, { HTMLInputTypeAttribute } from "react";
import { Controller, useFormContext } from "react-hook-form";

export interface TextFieldWithLabelProps {
  name: string;
  variant: "standard" | "outlined" | "filled";
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: HTMLInputTypeAttribute;
  label?: string;
  disabled?: boolean;
  labelPosition?: "top" | "side";
  required?: boolean;
  loading?: boolean;
  helperText?: string;
}

export default function TextFieldWithLabel(props: TextFieldWithLabelProps) {
  const { variant = "standard", type = "text" } = props;

  return (
    <div
      id="textFieldContainer"
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
        <div className="flex-grow rounded-md h-14 bg-slate-200 animate-pulse" />
      ) : (
        <div className="w-full">
          <TextField
            className="w-full"
            type={type}
            onChange={props.onChange}
            label={props.label}
            variant={variant}
            helperText={props.helperText}
            required={props.required}
            disabled={props.disabled}
          />
        </div>
      )}
    </div>
  );
}

const DynamicLabel = (props: {
  labelPosition?: "top" | "side";
  label?: string;
  required?: boolean;
}) => {
  return (
    <div
      className={clsx(
        "flex items-center h-full px-2",
        props.labelPosition == "top" && "w-full"
      )}
    >
      {`${props.label}${props.required ? "*" : ""}:`}
    </div>
  );
};
