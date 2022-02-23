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

export interface DropdownWithLabelProps {
  name: string;
  options: { label: any; value: any }[] | null | undefined;
  label?: string;
  disabled?: boolean;
  labelPosition?: "top" | "side";
  required?: boolean;
  onChange?: (e: any) => void;
  loading?: boolean;
  className?: string;
  helperText?: string;
}

export default function DropdownWithLabel(props: DropdownWithLabelProps) {
  const methods = useFormContext();
  return (
    <div
      className={clsx(
        "flex items-center justify-between w-full pt-2",
        props.labelPosition === "top" ? "flex-col text-left" : "flex-row",
        props.className
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
        <div className="w-full rounded-md h-14 bg-slate-200 animate-pulse" />
      ) : (
        <div className="w-full">
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
                    <Select label={props.label} onChange={field.onChange}>
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
