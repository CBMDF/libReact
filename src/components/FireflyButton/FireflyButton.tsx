import React, { ElementType, ReactNode } from "react";
import clsx from "clsx";
import { CircularProgress, Icon, SvgIcon } from "@mui/material";
import { ShoppingBag } from "@mui/icons-material";

const FireflyButton = (props: {
  label?: string;
  id?: string;
  size?: "sm" | "base" | "lg";
  variant?: "info" | "warning" | "error" | "confirm" | "custom";
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  className?: string;
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
  rounded?:
    | "rounded"
    | "rounded-none"
    | "rounded-sm"
    | "rounded-md"
    | "rounded-lg"
    | "rounded-xl"
    | "rounded-full";
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
    LoadingIconColor = "primary",
    StartIcon,
    EndIcon,
    rounded = "rounded",
  } = props;

  const IconSizes = {
    sm: "16px",
    base: "24px",
    lg: "32px",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      id={id}
      className={clsx(
        "duration-300 inline-flex justify-center ",
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
        size === "sm" && "text-xs md:text-sm space-x-1  py-1 px-3",
        size === "base" && "text-base py-2 space-x-2 px-3",
        size === "lg" && "text-lg  md:text-xl space-x-3 py-3 px-5",
        disabled && "text-opacity-80 bg-opacity-30",
        fullWidth && "w-full",
        rounded
      )}
    >
      {StartIcon && (
        <div>
          {React.cloneElement(StartIcon, {
            sx: { fontSize: IconSizes[size] },
          })}
        </div>
      )}
      {label && <div className="my-auto">{label.toUpperCase()}</div>}
      {EndIcon && (
        <div>
          {React.cloneElement(EndIcon, {
            sx: { fontSize: IconSizes[size] },
          })}
        </div>
      )}

      {loading && (
        <div className={clsx("text-xs")}>
          <CircularProgress size={IconSizes[size]} color={LoadingIconColor} />
        </div>
      )}
    </button>
  );
};

export default FireflyButton;
