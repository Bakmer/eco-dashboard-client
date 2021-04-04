import React from "react";
import AutocompleteSelect from "@material-ui/lab/Autocomplete";
import TextField, { StandardTextFieldProps } from "@material-ui/core/TextField";

interface Option {
  value: any;
  label: string;
}

interface AutoCompleteProps extends StandardTextFieldProps {
  options: Option[];
  isLoading?: boolean;
}

export const AutoComplete: React.FC<AutoCompleteProps> = React.forwardRef((props, ref) => {
  const { isLoading, options, size, label, onChange, fullWidth, disabled, ...rest } = props;

  if (isLoading || disabled) {
    return (
      <TextField
        {...rest}
        label={isLoading ? "Cargando..." : label}
        disabled={true}
        variant="outlined"
        size={size ? size : "small"}
        inputRef={ref}
        fullWidth={fullWidth}
      />
    );
  }

  return (
    <AutocompleteSelect
      ref={ref}
      disabled={disabled}
      options={options ? options : []}
      onChange={(_, option) => onChange!(option ? option!.value : "")}
      getOptionLabel={(option) => option.label}
      getOptionSelected={(option, selected) => option.value === selected.value}
      renderInput={(params) => (
        <TextField
          {...params}
          inputProps={{ ...params.inputProps, autoComplete: "new-password" }} // This is to avoid browser's autocomplete suggestions
          label={label}
          variant="outlined"
          size={size ? size : "small"}
          autoComplete="off"
          fullWidth={fullWidth}
        />
      )}
    />
  );
});
