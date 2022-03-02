import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import clsx from "clsx";
import React from "react";
import { Controller, useFormContext, UseFormReturn } from "react-hook-form";

export interface RHFDropdownWithLabelProps {
  name: string;
  options: { label: any; value: any }[] | null | undefined;
  size?: "medium" | "small";
  label?: string;
  disabled?: boolean;
  labelPosition?: "top" | "side";
  required?: boolean;
  loading?: boolean;
  className?: string;
  helperText?: string;
}

export default function RHFDropdownWithLabel(props: RHFDropdownWithLabelProps) {
  const methods = useFormContext();
  const { labelPosition = "side", size = "small" } = props;
  return (
    <div
      className={clsx(
        "flex items-center justify-between w-full",
        labelPosition === "side" && "flex-row space-x-4",
        labelPosition === "top" && "flex-col space-y-4",
        props.className
      )}
    >
      {props.label && (
        <DynamicLabel
          labelPosition={labelPosition}
          label={props.label}
          required={props.required}
        />
      )}

      {props.loading ? (
        <SkeletonDropdownBox />
      ) : (
        <div className="flex-grow w-full h-full">
          <Controller
            control={methods.control}
            name={props.name}
            rules={{ required: props.required ?? false }}
            render={({ field }) => (
              <>
                {
                  <FormControl
                    className="w-full"
                    disabled={props.disabled}
                    error={methods.formState.errors[props.name]}
                    required={props.required}
                  >
                    <InputLabel>{props.label}</InputLabel>
                    <Select
                      label={props.label}
                      onChange={field.onChange}
                      size={size}
                    >
                      {props.options && props.options?.length > 0 ? (
                        props.options.map((e) => (
                          <MenuItem key={e.value} value={e.value}>
                            {e.label}
                          </MenuItem>
                        ))
                      ) : (
                        <MenuItem value={""}>Sem opções</MenuItem>
                      )}
                    </Select>
                    {props.helperText && (
                      <FormHelperText>{props.helperText}</FormHelperText>
                    )}
                  </FormControl>
                }
              </>
            )}
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

const SkeletonDropdownBox = (): JSX.Element => {
  return <div className="w-full rounded-md h-14 bg-slate-200 animate-pulse" />;
};
