import React, { useState } from "react";
import { SectionWrapper, SectionTitle, StyledGridContainer } from "../styles";
import { Modal } from "../../../components/Modal";
import { PhoneModalForm } from "./PhoneModalForm";
import { ClientFragment } from "../../../generated/graphql";
import { PhoneCard } from "./PhoneCard";
import { Button } from "../../../components/Button";
import Grid from "@material-ui/core/Grid";

interface PhonesProps {
  client: ClientFragment;
}

export const Phones: React.FC<PhonesProps> = ({ client }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <SectionWrapper>
      <SectionTitle>Teléfonos</SectionTitle>
      <Button onClick={() => setShowModal(true)}>Agregar</Button>
      <StyledGridContainer container spacing={3}>
        {client.phones.map((phone) => (
          <Grid item xs={12} md={4} key={phone.id}>
            <PhoneCard phone={phone} client={client} />
          </Grid>
        ))}
      </StyledGridContainer>
      <Modal open={showModal} onClose={() => setShowModal(false)} width={500}>
        <PhoneModalForm onClose={() => setShowModal(false)} client={client} />
      </Modal>
    </SectionWrapper>
  );
};
