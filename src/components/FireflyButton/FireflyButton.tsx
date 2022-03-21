import React, { ElementType, ReactNode } from "react";
import clsx from "clsx";
import { CircularProgress, Icon, SvgIcon } from "@mui/material";

const FireflyButton = (props: {
  label?: string;
  id?: string;
  size?: "base" | "sm" | "lg";
  variant?: "info" | "warning" | "error" | "confirm" | "custom";
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  className?: string;
  LoadingIconSize?: number;
  LoadingIconColor?:
    | "inherit"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
  type?: "submit" | "reset" | "button";
  StartIcon?: any;
  EndIcon?: any;
  rounded?: 'rounded'| 'rounded-none' |'rounded-sm' | 'rounded-md' | 'rounded-lg' | 'rounded-xl' ; 
  // ['data-cy']?: string;
  // ['data-tour']?: string;
}) => {
  const {
    label,
    disabled = false,
    size = "base",
    variant = "contained",
    loading = false,
    onClick = undefined,
    fullWidth = false,
    type = "button",
    id,
    className,
    autoFocus = false,
    LoadingIconSize = 20,
    LoadingIconColor = "primary",
    StartIcon,
    EndIcon,
  } = props;

  return (
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        id={id}
        className={clsx(
          "duration-300 inline-flex  p-0",
          variant === "info" &&
            "font-header text-white bg-blue-600 hover:bg-blue-400 focus:border-white hover:opacity-95",
          variant === "warning" &&
            "font-header text-black bg-yellow-400 hover:bg-yellow-400 focus:border-white hover:opacity-95",
          variant === "error" &&
            "font-header text-white bg-red-600 hover:bg-red-500 focus:border-white hover:opacity-95",
          variant === "confirm" &&
            "font-header text-white bg-green-600 hover:bg-green-500 focus:border-white hover:opacity-95",
          variant === "custom" &&
            "font-header focus:border-white hover:opacity-95",
          size === "sm" && "text-xs md:text-sm py-0.5 space-x-1",
          size === "base" && "text-base py-2 space-x-2",
          size === "lg" && "text-lg py-2 md:text-xl md:py-3 px-2 space-x-3",
          disabled && "text-opacity-80 bg-opacity-30",
          props.rounded,
          className
        )}
      >
          
          <div>{StartIcon && React.cloneElement(StartIcon)}</div>
          <div>{label}</div>
          <div>{EndIcon && React.cloneElement(EndIcon)}</div>


        {loading && (
          <div className={clsx("text-xs")}>
            <CircularProgress size={LoadingIconSize} color={LoadingIconColor} />
          </div>
        )}
      </button>
  );
};

export default FireflyButton;
