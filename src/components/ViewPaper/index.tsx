import React from "react";
import { StyledPaper, Title } from "./styles";

interface ViewPaperProps {
  title: string;
}

export const ViewPaper: React.FC<ViewPaperProps> = ({ children, title }) => {
  return (
    <StyledPaper>
      <Title variant="h6" id="tableTitle" component="div">
        {title}
      </Title>
      {children}
    </StyledPaper>
  );
};
