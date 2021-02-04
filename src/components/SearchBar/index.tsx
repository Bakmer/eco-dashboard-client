import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { StyledPaper, StyledTextField, StyledIconButton } from "./styles";

interface SearchBarProps {
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    return console.log(text);
  };

  return (
    <StyledPaper component="form" onSubmit={handleSubmit}>
      <StyledTextField
        label="Buscar"
        name="search"
        value={text}
        onChange={(e) => setText(e.target.value)}
        size="small"
        InputProps={{
          endAdornment: (
            <StyledIconButton type="submit" aria-label="search">
              <SearchIcon />
            </StyledIconButton>
          ),
        }}
        fullWidth
      />
    </StyledPaper>
  );
};
