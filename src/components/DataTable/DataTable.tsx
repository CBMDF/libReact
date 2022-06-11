import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TextField } from "@mui/material";

export interface DataTableProps {
  rowSize?: "small" | "medium";
  enableGlobalFilter?: boolean;
  enableColumnFilter?: boolean;
  columns: ColumnsProps[];
  data: { [key: string]: any }[];
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

export default function DataTable(props: DataTableProps) {
  const {
    columns,
    enableGlobalFilter = true,
    enableColumnFilter = true,
  } = props;
  const { rowSize = "medium" } = props;
  const [data, setData] = React.useState(props.data);
  const [filterInputs, setFilterInputs] = React.useState<FilterInputsProps>({});

  const toLowerString = (arg: any) => String(arg).toLowerCase();

  const filterData = (
    dataToBeFiltered: { [key: string]: any }[],
    columnFilters: FilterInputsProps
  ) => {
    if (Object.values(columnFilters).filter((e) => e).length == 0)
      return dataToBeFiltered;

    dataToBeFiltered = dataToBeFiltered.filter((row) =>
      Object.keys(columnFilters).every((el) =>
        toLowerString(row[el]).includes(toLowerString(filterInputs[el]))
      )
    );
    return dataToBeFiltered;
  };

  React.useEffect(() => {
    if (props.data.length > 0) {
      setData(props.data);
    }
  }, [props.data]);

  React.useEffect(() => {
    let filteredData = filterData([...data], filterInputs);
    setData(filteredData);
  }, [filterInputs]);

  return (
    <Table size={rowSize} aria-label="a dense table">
      <TableHeader
        columns={columns}
        filterInputs={filterInputs}
        setFilterInputs={setFilterInputs}
        rowclassName="bg-slate-50"
        enableGlobalFilter={enableGlobalFilter}
        enableColumnFilter={enableColumnFilter}
      />
      <TableBody>
        {data.map((row, index) => (
          <TableRow
            key={index}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            {columns.map((el) => (
              <TableCell component="th" scope="row" key={el.field}>
                {row[el.field as keyof typeof row]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export function TableHeader(props: {
  columns: ColumnsProps[];
  filterInputs: FilterInputsProps;
  setFilterInputs: (arg: FilterInputsProps) => void;
  rowclassName?: string;
  enableGlobalFilter?: boolean;
  enableColumnFilter?: boolean;
}) {
  const {
    columns,
    filterInputs,
    setFilterInputs,
    rowclassName,
    enableGlobalFilter,
    enableColumnFilter,
  } = props;
  function handleUpdateFilterInput(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) {
    let temp = { ...filterInputs!, [field]: e.target.value };
    setFilterInputs(temp);
  }

  return (
    <TableHead>
      {enableGlobalFilter && (
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
      )}
      <TableRow className={rowclassName}>
        {columns.map((e) => (
          <TableCell key={e.field} width={e.width}>
            {e.headerName}
          </TableCell>
        ))}
      </TableRow>
      {enableColumnFilter && (
        <TableRow className={rowclassName}>
          {columns.map((arg) => (
            <TableCell key={arg.field}>
              <TextField
                size="small"
                className="bg-white"
                onChange={(e) => handleUpdateFilterInput(e, arg.field)}
              />
            </TableCell>
          ))}
        </TableRow>
      )}
    </TableHead>
  );
}
