import React, { useState } from "react";
import CalendarioDeAlas from "./calendarioDeAlas";
import clsx from "clsx";
import { format } from "date-fns";
import { useFormContext } from "react-hook-form";
import { Dialog } from "@mui/material";

interface InputCalendarioAlasProps {
  name: string;
  label: string;
}

export default function InputCalendarioAlas({
  name,
  label,
}: InputCalendarioAlasProps) {
  const methods = useFormContext();
  const [isVisible, setVisible] = useState(false);

  function handleChooseDate(date: Date) {
    methods.setValue(name, format(date, "yyyy/MM/dd"), { shouldDirty: true });
    setVisible(false);
  }

  const data = methods.watch(name);

  return (
    <div className="w-full">
      <Dialog
        // PaperProps={{ sx: { position: "absolute", top: 10, left: 10, m: 0 } }}
        open={isVisible}
        onClose={() => setVisible(false)}
        maxWidth="lg"
      >
        <CalendarioDeAlas
          methods={methods}
          handleChooseDate={handleChooseDate}
        />
      </Dialog>
      <div className="flex items-center flex-grow w-full pt-2 space-x-5">
        <div className="w-10 pr-5 text-sm">{label}:</div>
        <button
          type="button"
          className={clsx(
            "relative w-full flex flex-grow h-8 pl-2 pr-5 text-left text-gray-500 bg-white border border-gray-300 hover:border-blue-300"
          )}
          onClick={() => setVisible(true)}
        >
          {(data && format(new Date(data), "dd/MM/yyyy")) || "dd/mm/aaaa"}
          <i
            className="absolute pi pi-angle-down right-2 top-2"
            style={{ fontSize: "1rem" }}
          />
        </button>
      </div>
    </div>
  );
}
