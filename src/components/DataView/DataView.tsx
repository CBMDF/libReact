import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Select, TextField } from "@mui/material";
import DropdownWithLabel from "../RHFDropdownWithLabel";
import FireflyButton from "../FireflyButton";
import clsx from "clsx";

export interface DataViewProps {
  text?: string;
  columns: ColumnsProps;
}

export interface ColumnsProps {
  field: string;
  headerName: string;
  type?: "number";
  width?: number;
  editable?: boolean;
}

const toggleOptions = [
  { name: "A", value: 1 },
  { name: "B", value: 2 },
];

export default function DataView(props: DataViewProps) {
  const [viewMode, setViewMode] = React.useState<string>("A");
  return (
    <div className="p-5 border rounded-md">
      <div
        id="dataview-header"
        className=" flex items-center justify-between p-2 pb-4 border-b"
      >
        <div>
          <Select className="h-8 w-52" />
        </div>
        <div>
          <ToogleSelect
            opcoes={toggleOptions}
            opcaoEscolhida={viewMode}
            setOpcaoEscolhida={setViewMode}
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4"></div>
    </div>
  );
}

function ToogleSelect(props: {
  opcaoEscolhida: string;
  opcoes: { name: string; value: number }[];
  setOpcaoEscolhida: (arg: string) => void;
}): JSX.Element {
  const { opcoes, opcaoEscolhida, setOpcaoEscolhida } = props;
  return (
    <div className="flex flex-row w-32 border rounded-md">
      {props.opcoes.map((el, i) => (
        <button
          key={el.name}
          onClick={() => setOpcaoEscolhida(el.name)}
          className={clsx(
            "flex flex-grow justify-center p-1 text-black",
            opcaoEscolhida == el.name && `bg-blue-400 text-white`,
            !(i == opcoes.length - 1) && "border-r"
          )}
        >
          {el.name}
        </button>
      ))}
    </div>
  );
}
