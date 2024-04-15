import React from "react";
import { Slide, Box, Button } from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";

const ExpandedPage = ({ isOpen, onClose }) => {
  return (
    <Slide direction="right" in={isOpen} style={{ zIndex: 10 }}>
      <Box p="40px" color="white" mt="4" bg="gray.800" rounded="md" shadow="md" width="50%" height="100vh" position="fixed" top="0" right="0">
        <Button position="absolute" top={4} right={4} onClick={onClose} variant="unstyled" color="white" _hover={{ color: "gray.300" }}>
          <FaTimes />
        </Button>
        {}
      </Box>
    </Slide>
  );
};

export default ExpandedPage;
