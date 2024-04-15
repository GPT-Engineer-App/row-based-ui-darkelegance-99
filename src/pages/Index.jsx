import React, { useState } from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, TableContainer, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from "@chakra-ui/react";
import { FaExpandAlt, FaExternalLinkAlt } from "react-icons/fa";
import ResultTag from "../components/ResultTag";
import ExpandedPage from "../components/ExpandedPage";

const Index = () => {
  const data = [
    {
      id: 1,
      created_at: "2024-04-15 07:42:38.763008+00",
      case_started: "2024-04-01",
      personal_injury: true,
      result: "accepted",
      situation_begin: "2024-04-13",
      type_injury: "Occupational accidents",
      what_happened: "Heavy machinery fell on the claimant while they were working.",
      how_happened: "The cause of the heavy machinery falling is unknown.",
      chat_history: `[{"role":"assistant","content":"Hello! I'm here to help you with your situation. Let's begin with:  \\nWhat can I help you with? "},
{"role":"user","content":"I was working my shift when some heavy machinery suddenly fell ontop of me."},
...
{"role":"user","content":"Correct"}]`,
    },
  ];

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const ChatHistoryModal = ({ isOpen, onClose, chatHistory }) => (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Chat History</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <pre>{chatHistory}</pre>
        </ModalBody>
      </ModalContent>
    </Modal>
  );

  const openChatHistory = (chatHistory) => {
    setSelectedChatHistory(chatHistory);
    setIsChatHistoryOpen(true);
  };

  const [isChatHistoryOpen, setIsChatHistoryOpen] = useState(false);
  const [selectedChatHistory, setSelectedChatHistory] = useState("");

  return (
    <Box bg="gray.900" minH="100vh" p={4}>
      <TableContainer>
        <Table variant="simple" size="md">
          <Thead>
            <Tr>
              <Th color="white" p={1}></Th>
              <Th color="white" maxW="300px">
                Result
              </Th>
              <Th color="white" maxW="300px">
                Personal Injury
              </Th>
              <Th color="white" maxW="300px">
                Case Started
              </Th>
              <Th color="white" maxW="300px">
                Situation Begin
              </Th>
              <Th color="white" maxW="300px">
                Created At
              </Th>
              <Th color="white" maxW="300px">
                Chat History
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, index) => (
              <Tr key={item.id} bg={index % 2 === 0 ? "gray.900" : "gray.700"} color="white">
                <Td p={1}>
                  <Button variant="unstyled" onClick={toggleExpand}>
                    <Box p={1}>
                      <FaExpandAlt />
                    </Box>
                  </Button>
                </Td>
                <Td maxW="300px" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
                  <ResultTag result={item.result} />
                </Td>
                <Td maxW="300px" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
                  {item.personal_injury ? "Yes" : "No"}
                </Td>
                <Td maxW="300px" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
                  {item.case_started}
                </Td>
                <Td maxW="300px" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
                  {item.situation_begin}
                </Td>
                <Td maxW="300px" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
                  {item.created_at.slice(0, 16)}
                </Td>
                <Td maxW="300px" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
                  <Button variant="unstyled" onClick={() => openChatHistory(item.chat_history)}>
                    <Box display="flex" alignItems="center">
                      <FaExternalLinkAlt />
                      <Box ml={2}>See Chat History</Box>
                    </Box>
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <ExpandedPage isOpen={isExpanded} onClose={toggleExpand} />
      <ChatHistoryModal isOpen={isChatHistoryOpen} onClose={() => setIsChatHistoryOpen(false)} chatHistory={selectedChatHistory} />
    </Box>
  );
};

export default Index;
