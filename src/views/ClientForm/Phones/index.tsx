import React, { useState } from "react";
import { Button } from "../../../components/Button";
import { SectionWrapper, SectionTitle } from "../styles";
import { Modal } from "../../../components/Modal";
import { PhoneForm } from "./PhoneForm";

interface PhonesProps {}

export const Phones: React.FC<PhonesProps> = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <SectionWrapper>
      <SectionTitle>Teléfonos</SectionTitle>
      <Button onClick={() => setShowModal(true)}>Agregar</Button>

      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <PhoneForm onClose={() => setShowModal(false)} />
      </Modal>
    </SectionWrapper>
  );
};
