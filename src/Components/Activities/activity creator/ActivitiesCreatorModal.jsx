import React from "react";
import ActivitiesForm from "../ActivitiesForm.jsx";
import {
  Overlay,
  ModalContainer,
  CloseButton,
  FormContainer,
} from "./ActivitiesCreatorModalStyles.js";

const ActivitiesCreatorModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>X</CloseButton>
        <FormContainer>
          <ActivitiesForm />
        </FormContainer>
      </ModalContainer>
    </Overlay>
  );
};

export default ActivitiesCreatorModal;
