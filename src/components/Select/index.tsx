import React from "react";
import { StyledMuiSelect } from "./styles";
import { StandardTextFieldProps } from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

interface Option {
  value: any;
  label: string;
}

interface TextFieldProps extends StandardTextFieldProps {
  options?: Option[];
  isLoading?: boolean;
}

export const Select: React.FC<TextFieldProps> = React.forwardRef(
  (props, ref) => {
    const { isLoading, options, ...rest } = props;

    return (
      <React.Fragment>
        {isLoading ? (
          <StyledMuiSelect
            {...rest}
            label="Cargando..."
            value=""
            disabled={true}
            inputRef={ref}
            variant="outlined"
          />
        ) : (
          <StyledMuiSelect {...rest} inputRef={ref} variant="outlined" select>
            {options
              ? options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))
              : []}
          </StyledMuiSelect>
        )}
      </React.Fragment>
    );
  }
);
