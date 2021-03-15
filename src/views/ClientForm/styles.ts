import styled from "styled-components";
import RadioGroup from "@material-ui/core/RadioGroup";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";

export const StyledForm = styled.form(({ theme }) => ({
  maxWidth: 1200,
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}));

export const StyledRadioGroup = styled(RadioGroup)`
  flex-direction: row;

  .MuiFormControlLabel-root {
    margin-right: 30px;
  }
`;

export const ButtonWrapper = styled.div(({ theme }) => ({
  width: "180px",
  padding: "5px 16px 16px 16px",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const SectionTitle = styled.div`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 7px;
`;

export const SectionWrapper = styled.div(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const StyledCardHeader = styled(CardHeader)`
  padding-bottom: 5px;

  & span {
    font-size: 1rem;
    font-weight: 500;
    word-break: break-word;
  }

  & .MuiCardHeader-action {
    margin-top: 0;
  }
`;

export const StyledCardContent = styled(CardContent)`
  padding-top: 0;
  padding-bottom: 16px !important;
`;

export const StyledGridContainer = styled(Grid)`
  margin-top: 0;
  margin-bottom: 0;

  & > .MuiGrid-item {
    padding-top: 14px;
    padding-bottom: 0;
  }
`;

export const CardForm = styled.form`
  margin-top: 22px;
  margin-bottom: 4px;
`;
