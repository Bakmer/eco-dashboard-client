import React from "react";
import { SectionTitle, SectionWrapper } from "../styles";

interface ShippingAddressesProps {}

export const ShippingAddresses: React.FC<ShippingAddressesProps> = () => {
  return (
    <SectionWrapper>
      <SectionTitle>Direcciónes de envío</SectionTitle>
    </SectionWrapper>
  );
};
