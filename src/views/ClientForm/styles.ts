import styled from "styled-components";
import RadioGroup from "@material-ui/core/RadioGroup";

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
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 7px;
`;

export const SectionWrapper = styled.div(({ theme }) => ({
  padding: theme.spacing(2),
}));
