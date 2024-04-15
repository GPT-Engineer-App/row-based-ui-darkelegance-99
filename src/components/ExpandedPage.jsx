import React from "react";
import { Slide, Box, Button } from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";

const fields = [
  {
    headline: "What Happened",
    description: "Brief description of the incident",
  },
  {
    headline: "Short Summary",
    description: "Concise summary of the case",
  },
  {
    headline: "Annotations",
    description: "Key terms related to the case",
  },
  {
    headline: "Parties Involved",
    description: "Individuals involved in the incident",
  },
  {
    headline: "Consequences",
    description: "Impact of the incident on the claimant",
  },
  {
    headline: "Cost",
    description: "Cost of the AI analysis",
  },
  {
    headline: "Chat History",
    description: "Conversation between the AI and claimant",
  },
  {
    headline: "Direct Cause",
    description: "Immediate cause of the incident",
  },
  {
    headline: "How It Happened",
    description: "Description of how the incident occurred",
  },
];

const ExpandedPage = ({ isOpen, onClose }) => {
  return (
    <Slide direction="right" in={isOpen} style={{ zIndex: 10 }}>
      <Box p="40px" color="white" mt="4" bg="gray.800" rounded="md" shadow="md" width="70%" height="100vh" position="fixed" top="0" right="0" overflowY="auto">
        <Button onClick={onClose} variant="unstyled" color="white" _hover={{ color: "gray.300" }} position="absolute" top="40px" right="40px">
          <FaTimes />
        </Button>
        {fields.map((field, index) => (
          <Box key={index} display="flex" width="100%" mb={6}>
            <Box width="40%" pr={4}>
              <Box as="h4" fontSize="xl" fontWeight="bold" mb={2}>
                {field.headline}
              </Box>
              <Box as="p" fontSize="md">
                {field.description}
              </Box>
            </Box>
            <Box width="60%">
              <Box width="100%" bg="gray.700" borderRadius="md" p={2} whiteSpace="pre-wrap">
                {field.description}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Slide>
  );
};

export default ExpandedPage;
