import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Typography, { TypographyProps } from "@material-ui/core/Typography";

export const StyledPaper = styled(Paper)(({ theme }) => ({
  width: "100%",
  maxWidth: 1440,
  marginBottom: theme.spacing(2),
}));

export const Title = styled(Typography)<
  TypographyProps<"div", { component: "div" }>
>(({ theme }) => ({
  flex: "1 1 100%",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(1),
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(1),
}));
