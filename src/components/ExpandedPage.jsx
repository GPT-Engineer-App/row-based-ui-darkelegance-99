import React from "react";
import { Slide, Box, Button } from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";

const fields = [
  {
    headline: "What Happened",
    description: "A brief description of the incident that occurred.",
  },
  {
    headline: "Short Summary",
    description: "A concise summary of the key points of the incident.",
  },
  {
    headline: "Annotations",
    description: "Additional notes or comments related to the incident.",
  },
  {
    headline: "Parties Involved",
    description: "The individuals or entities involved in the incident.",
  },
  {
    headline: "Consequences",
    description: "The outcomes or repercussions resulting from the incident.",
  },
  {
    headline: "Cost",
    description: "The financial impact or expenses incurred due to the incident.",
  },
  {
    headline: "Chat History",
    description: "A record of the conversations or communications related to the incident.",
  },
  {
    headline: "Direct Cause",
    description: "The primary reason or trigger that led to the incident.",
  },
  {
    headline: "How It Happened",
    description: "A detailed account of the sequence of events that occurred during the incident.",
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
              <Box width="100%" bg="gray.700" borderRadius="md" p={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nulla sit amet aliquam lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl. Sed euismod, nulla sit amet aliquam lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl.
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Slide>
  );
};

export default ExpandedPage;
