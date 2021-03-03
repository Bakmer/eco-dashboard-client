import React from "react";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import Collapse from "@material-ui/core/Collapse";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";

interface CollapsibleTableProps {
  open: boolean;
}

export const CollapsibleTable: React.FC<CollapsibleTableProps> = ({ open }) => {
  return (
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box mx={1} mb={1} width="30%">
            <Typography variant="h6" gutterBottom component="div">
              Datos de envío
            </Typography>
            <Table size="small" aria-label="purchases">
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Customer</TableCell>
                  <TableCell align="right">Amount</TableCell>
                  <TableCell align="right">Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    uno
                  </TableCell>
                  <TableCell>dos</TableCell>
                  <TableCell align="right">tres</TableCell>
                  <TableCell align="right">cuatro</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
          <Box mx={1} mt={1} mb={2}>
            <Table size="small" aria-label="purchases">
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Customer</TableCell>
                  <TableCell align="right">Amount</TableCell>
                  <TableCell align="right">Total price ($)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    uno
                  </TableCell>
                  <TableCell>dos</TableCell>
                  <TableCell align="right">tres</TableCell>
                  <TableCell align="right">cuatro</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  );
};
