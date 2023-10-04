import { FC, ReactNode } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableColumn } from "@/utils/types";

interface Props {
  columns: TableColumn[];
  children?: ReactNode;
}

const AppTable: FC<Props> = ({ columns, children }) => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 500 }}>
      <Table sx={{ minWidth: 650 }} stickyHeader>
        <TableHead>
          <TableRow>
            {columns.map((column, idx) => (
              <TableCell key={idx} className="text-white bg-themePrimaryBlue">
                {column.name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody sx={{ minHeight: 400 }}>{children}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default AppTable;
