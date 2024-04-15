import React from "react";
import { Slide, Box, Button } from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";

const fields = [
  {
    headline: "What Happened",
    description: "Heavy machinery fell on the claimant while they were working.",
  },
  {
    headline: "How It Happened",
    description: "The cause of the heavy machinery falling is unknown.",
  },
  {
    headline: "Short Summary",
    description: "The user was involved in a workplace accident where heavy machinery fell on them. This incident occurred a couple of days ago, and legal proceedings were initiated in April of this year. The user was the only person involved and is currently unsure of the direct cause of the accident. As a result of the incident, the user is unable to work, which is negatively impacting their financial health.",
  },
  {
    headline: "Parties Involved",
    description: '["user"]',
  },
  {
    headline: "Consequences",
    description: '["unable to work","negative impact on financial health"]',
  },
  {
    headline: "Direct Cause",
    description: "unknown",
  },
  {
    headline: "Annotations",
    description: '["workplace accident","heavy machinery","legal proceedings","financial health"]',
  },
  {
    headline: "Cost",
    description: "0.13067",
  },
];

const ExpandedPage = ({ isOpen, onClose }) => {
  const firstColRef = React.useRef();
  const [firstColHeight, setFirstColHeight] = React.useState(0);

  React.useEffect(() => {
    if (firstColRef.current) {
      setFirstColHeight(firstColRef.current.clientHeight);
    }
  }, []);

  return (
    <Slide direction="right" in={isOpen} style={{ zIndex: 10 }}>
      <Box p="40px" color="white" mt="4" bg="gray.800" rounded="md" shadow="md" width="70%" height="100vh" position="fixed" top="0" right="0" overflowY="auto">
        <Button onClick={onClose} variant="unstyled" color="white" _hover={{ color: "gray.300" }} position="absolute" top="40px" right="40px">
          <FaTimes />
        </Button>
        {fields.map((field, index) => (
          <Box key={index} display="flex" width="100%" mb={6}>
            <Box width="40%" pr={4} ref={firstColRef}>
              <Box as="h4" fontSize="xl" fontWeight="bold" mb={2}>
                {field.headline}
              </Box>
              <Box as="p" fontSize="md">
                {field.headline === "What Happened" ? "Description of the incident" : field.headline === "Short Summary" ? "Brief overview of the situation" : field.headline === "Annotations" ? "Key terms extracted from the chat" : field.headline === "Parties Involved" ? "People or entities involved" : field.headline === "Consequences" ? "Outcomes of the incident" : field.headline === "Cost" ? "Cost of the AI chat interaction" : field.headline === "Chat History" ? "Full transcript of the chat" : field.headline === "Direct Cause" ? "Immediate trigger of the incident" : "Explanation of the incident"}
              </Box>
            </Box>
            <Box width="60%">
              <Box width="100%" bg="gray.700" borderRadius="md" p={2} whiteSpace="pre-wrap" minHeight={`${firstColHeight}px`}>
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
