import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from "@chakra-ui/react";

const ChatHistoryModal = ({ isOpen, onClose, chatHistory }) => (
  <Modal isOpen={isOpen} onClose={onClose} size="4xl">
    <ModalOverlay />
    <ModalContent bg="gray.900" color="white" height="600px">
      <ModalHeader>Chat History</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <pre>{chatHistory}</pre>
      </ModalBody>
    </ModalContent>
  </Modal>
);

export default ChatHistoryModal;
