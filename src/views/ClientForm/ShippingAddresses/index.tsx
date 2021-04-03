import React, { useState } from "react";
import { SectionWrapper, SectionTitle, StyledGridContainer } from "../styles";
import { Modal } from "../../../components/Modal";
import { ShippingModalForm } from "./ShippingModalForm";
import { ClientFragment } from "../../../generated/graphql";
import { ShippingCard } from "./ShippingCard";
import { Button } from "../../../components/Button";
import Grid from "@material-ui/core/Grid";

interface ShippingProps {
  client: ClientFragment;
}

export const ShippingAddresses: React.FC<ShippingProps> = ({ client }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <SectionWrapper>
      <SectionTitle>Direcciones de envío</SectionTitle>
      <Button onClick={() => setShowModal(true)}>Agregar</Button>
      <StyledGridContainer container spacing={3}>
        {client.shippings.map((shipping) => (
          <Grid item xs={12} md={4} key={shipping.id}>
            <ShippingCard shipping={shipping} client={client} />
          </Grid>
        ))}
      </StyledGridContainer>
      <Modal open={showModal} onClose={() => setShowModal(false)} width={500}>
        <ShippingModalForm onClose={() => setShowModal(false)} client={client} />
      </Modal>
    </SectionWrapper>
  );
};
