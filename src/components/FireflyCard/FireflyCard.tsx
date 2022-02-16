import clsx from "clsx";
import React from "react";

const FireflyCard = (props: {
  children: JSX.Element;
  className?: string;
  title?: string;
  fullWidth?: boolean;
}) => {
  return (
    <div
      className={clsx(
        "relative border w-full border-gray-50 flex-grow my-4 p-2 rounded-lg md:m-5 md:rounded-xl md:p-5 shadow-xl",
        props.className,
        props.fullWidth && "md:w-full"
      )}
    >
      {props.title && (
        <div className="absolute p-1 text-center border border-gray-100 rounded-md shadow-lg md:p-2 min-w-max bg-gray-50 -top-5">
          <span>{props.title}</span>
        </div>
      )}
      <div className="w-full pt-2">{props.children}</div>
    </div>
  );
};

export default FireflyCard;
