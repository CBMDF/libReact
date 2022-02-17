import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import clsx from "clsx";
import React, { useEffect } from "react";
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

const DropdownWithLabel = (props: {
  name: string;
  options: { label: any; value: any }[] | null | undefined;
  label?: string;
  disabled?: boolean;
  labelPosition?: "top" | "side";
  type?: "number" | "text" | "date" | "datetime";
  required?: boolean;
  onChange?: (e: any) => void;
  loading?: boolean;
  helperText?: string;
}) => {
  const methods = useFormContext();
  useEffect(() => {
    if (
      methods.formState.errors[props.name] &&
      methods.formState.errors[props.name].type === "required" &&
      methods.formState.isSubmitting //para evitar re-render
    ) {
      alert(`O campo ${props.label} é obrigatório`);
    }
  }, [methods.formState]);
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
                    <InputLabel id="demo-simple-select-disabled-label">
                      {props.label}
                    </InputLabel>
                    <Select
                      labelId="simple-select"
                      id="simple-select"
                      value={field.value}
                      label={props.label}
                      onChange={field.onChange}
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
};

export default DropdownWithLabel;
