import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TextField } from "@mui/material";

export interface DataTableProps {
  rowSize?: "small" | "medium";
  columns: ColumnsProps[];
}

export interface ColumnsProps {
  field: string;
  headerName: string;
  type?: "number";
  width?: number;
  editable?: boolean;
}

export interface FilterInputsProps {
  [key: string]: string | undefined;
}

const rows: { [key: string]: any }[] = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export function TableHeader(props: {
  columns: ColumnsProps[];
  filterInputs: FilterInputsProps;
  setFilterInputs: (arg: FilterInputsProps) => void;
  rowclassName?: string;
}) {
  const { columns, filterInputs, setFilterInputs, rowclassName } = props;
  function handleUpdateFilterInput(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) {
    let temp = { ...filterInputs!, [field]: e.target.value };
    setFilterInputs(temp);
  }

  return (
    <TableHead>
      <TableRow className={rowclassName}>
        <TableCell colSpan={columns.length - 1} />
        <TableCell>
          <TextField
            size="small"
            className="bg-white"
            onChange={(e) => handleUpdateFilterInput(e, "globalFilter")}
          />
        </TableCell>
      </TableRow>
      <TableRow className={rowclassName}>
        {columns.map((e) => (
          <TableCell align="center">{e.headerName}</TableCell>
        ))}
      </TableRow>
      <TableRow className={rowclassName}>
        {columns.map((arg) => (
          <TableCell align="center">
            <TextField
              size="small"
              className="bg-white"
              onChange={(e) => handleUpdateFilterInput(e, arg.field)}
            />
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function DataTable(props: DataTableProps) {
  const { columns } = props;
  const { rowSize = "medium" } = props;
  const [data, setData] = React.useState(rows);
  const [filterInputs, setFilterInputs] = React.useState<FilterInputsProps>({});

  const toLowerString = (arg: any) => String(arg).toLowerCase;

  React.useEffect(() => {
    let tempData = [...rows];
    if (Object.values(filterInputs)) {
      Object.keys(filterInputs).map(
        (e) =>
          (tempData = tempData.filter((arg) =>
            String(arg[e])
              .toLowerCase()
              .includes(filterInputs[e]!.toLowerCase())
          ))
      );
      // tempData = tempData.map((row) =>
      //   Object.keys(row).map(
      //     (el) => toLowerString(row[el]) == toLowerString(filterInputs[el])
      //   )
      // );
      setData(tempData);
      console.log(Object.values(filterInputs));
      // console.log(tempData);
    }
  }, [Object.values(filterInputs)]);

  return (
    <Table size={rowSize} aria-label="a dense table">
      <TableHeader
        columns={columns}
        filterInputs={filterInputs}
        setFilterInputs={setFilterInputs}
        rowclassName="bg-slate-50"
      />
      <TableBody>
        {data.map((row, index) => (
          <TableRow
            key={index}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            {columns.map((el) => (
              <TableCell component="th" scope="row">
                {row[el.field as keyof typeof row]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
