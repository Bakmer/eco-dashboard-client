import React from "react";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import Collapse from "@material-ui/core/Collapse";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import { ClientPhoneFragment, ClientShippingFragment } from "../../../../generated/graphql";
import { MemoContainer, StyledTableCell } from "./styles";

interface CollapsibleTableProps {
  open: boolean;
  data: {
    memo: string;
    phones: ClientPhoneFragment[];
    shippings: ClientShippingFragment[];
  };
}

const PhoneRow: React.FC<{ phone?: ClientPhoneFragment }> = ({ phone }) => {
  return (
    <TableRow>
      <TableCell align="center">{phone ? `(${phone.area_code}) - ${phone.phone}` : "-"}</TableCell>
      <TableCell align="center">{phone ? phone.name : "-"}</TableCell>
    </TableRow>
  );
};

const ShippingRow: React.FC<{ shipping?: ClientShippingFragment }> = ({ shipping }) => {
  return (
    <TableRow>
      <TableCell align="center">{shipping ? shipping.name : "-"}</TableCell>
      <TableCell align="center">{shipping ? shipping.street : "-"}</TableCell>
      <TableCell align="center">{shipping ? shipping.street_number : "-"}</TableCell>
      <TableCell align="center">{shipping ? shipping.postal_code : "-"}</TableCell>
      <TableCell align="center">{shipping ? shipping.cuit : "-"}</TableCell>
      <TableCell align="center">{shipping ? shipping.province : "-"}</TableCell>
      <TableCell align="center">{shipping ? shipping.location : "-"}</TableCell>
      <StyledTableCell align="center">{shipping ? shipping.transport.name : "-"}</StyledTableCell>
      <TableCell align="center">{shipping ? shipping.memo : "-"}</TableCell>
    </TableRow>
  );
};

export const CollapsibleTable: React.FC<CollapsibleTableProps> = ({ open, data }) => {
  return (
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box display="flex" mx={1} mb={2}>
            <Box mr={2} width="45%">
              <Typography variant="h6" component="div">
                Teléfonos
              </Typography>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" width="50%">
                      Teléfono
                    </TableCell>
                    <TableCell align="center" width="50%">
                      Nota
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.phones.length ? (
                    data.phones.map((phone) => <PhoneRow phone={phone} key={phone.id} />)
                  ) : (
                    <PhoneRow />
                  )}
                </TableBody>
              </Table>
            </Box>
            <Box ml={2} pl={1} width="50%">
              <Typography variant="h6" component="div">
                Memo
              </Typography>
              <Box fontWeight={500} fontSize="14px">
                <MemoContainer>{data.memo}</MemoContainer>
              </Box>
            </Box>
          </Box>
          <Box mx={1} mt={1} mb={4}>
            <Typography variant="h6" component="div">
              Datos de envio
            </Typography>
            <Table size="small" aria-label="purchases">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Recibe</TableCell>
                  <TableCell align="center">Calle</TableCell>
                  <TableCell align="center">Altura</TableCell>
                  <TableCell align="center">C.P.</TableCell>
                  <TableCell align="center">CUIT</TableCell>
                  <TableCell align="center">Provincia</TableCell>
                  <TableCell align="center">Localidad</TableCell>
                  <TableCell align="center">Transporte</TableCell>
                  <TableCell align="center">Memo</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.shippings.length ? (
                  data.shippings.map((shipping) => <ShippingRow shipping={shipping} key={shipping.id} />)
                ) : (
                  <ShippingRow />
                )}
              </TableBody>
            </Table>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  );
};
