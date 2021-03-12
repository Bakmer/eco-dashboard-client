import React from "react";
import { SectionTitle, SectionWrapper } from "../styles";

interface BillingsProps {}

export const Billings: React.FC<BillingsProps> = () => {
  return (
    <SectionWrapper>
      <SectionTitle>Facturación</SectionTitle>
    </SectionWrapper>
  );
};
