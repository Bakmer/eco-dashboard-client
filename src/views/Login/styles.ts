import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

export const Root = styled.div`
  height: 95vh;
`;

export const GridContainer = styled(Grid)`
  height: 100%;
`;

export const StyledPaper = styled(Paper)`
  max-width: 380px;
  margin: 15px;
`;

export const StyledForm = styled.form(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
}));
