import React from "react";
import { Slide, Box } from "@chakra-ui/react";

const ExpandedPage = ({ isOpen, onClose }) => {
  return (
    <Slide direction="right" in={isOpen} style={{ zIndex: 10 }}>
      <Box p="40px" color="white" mt="4" bg="gray.800" rounded="md" shadow="md" width="50%" height="100vh" position="fixed" top="0" right="0">
        {}
      </Box>
    </Slide>
  );
};

export default ExpandedPage;
