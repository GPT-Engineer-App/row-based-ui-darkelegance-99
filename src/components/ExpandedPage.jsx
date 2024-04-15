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
        <Box display="flex" width="100%">
          <Box width="30%" pr={4}>
            <Box as="h4" fontSize="xl" fontWeight="bold" mb={2}>
              Headline
            </Box>
            <Box as="p" fontSize="md">
              Description goes here
            </Box>
          </Box>
          <Box width="70%">
            <Box as="textarea" width="100%" height="200px" bg="gray.700" borderRadius="md" p={2}></Box>
          </Box>
        </Box>
      </Box>
    </Slide>
  );
};

export default ExpandedPage;
