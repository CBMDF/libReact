import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TextField } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
];

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

interface DataTableProps {
  rowSize?: "small" | "medium";
}

export default function DataTable(props: DataTableProps) {
  const [data, setData] = React.useState(rows);
  const [hasFilterChanged, setHasFilterChanged] =
    React.useState<boolean>(false);
  const listafiltros = React.useRef<{ [key: string]: string }>({});

  React.useEffect(() => {
    let tempData = rows;
    Object.keys(listafiltros.current).map(
      (e) =>
        (tempData = tempData.filter((arg) =>
          String(arg[e])
            .toLowerCase()
            .includes(listafiltros.current[e].toLowerCase())
        ))
    );
    setData(tempData);
  }, [hasFilterChanged]);

  function handleUpdateFilterInput(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) {
    let temp = { ...listafiltros.current!, [field]: e.target.value };
    listafiltros.current = temp;
    setHasFilterChanged((hasFilterChanged) => !hasFilterChanged);
  }

  const { rowSize = "medium" } = props;
  return (
    <Table size={rowSize} aria-label="a dense table">
      <TableHead>
        <TableRow className="bg-slate-100">
          {columns.map((e) => (
            <TableCell>{e.headerName}</TableCell>
          ))}
        </TableRow>
        <TableRow className="bg-slate-100">
          {columns.map((arg) => (
            <TableCell>
              <TextField
                size="small"
                className="bg-white"
                onChange={(e) => handleUpdateFilterInput(e, arg.field)}
              />
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
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
