import React, { useState } from "react";
import { Button } from "../../../components/Button";
import { SectionWrapper, SectionTitle } from "../styles";
import { Modal } from "../../../components/Modal";
import { PhoneForm } from "./PhoneForm";
import { ClientFragment } from "../../../generated/graphql";

interface PhonesProps {
  client: ClientFragment;
}

export const Phones: React.FC<PhonesProps> = ({ client }) => {
  const [showModal, setShowModal] = useState(false);
  const phones = client.phones;

  return (
    <SectionWrapper>
      <SectionTitle>Teléfonos</SectionTitle>
      <Button onClick={() => setShowModal(true)}>Agregar</Button>

      <Modal open={showModal} onClose={() => setShowModal(false)} width={500}>
        <PhoneForm onClose={() => setShowModal(false)} client={client} />
      </Modal>
    </SectionWrapper>
  );
};
