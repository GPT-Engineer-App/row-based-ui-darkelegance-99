import React, { useState } from "react";
import { Box, Table, Thead, Tbody, TableContainer } from "@chakra-ui/react";
import ExpandedPage from "../components/ExpandedPage";
import TableHeader from "../components/TableHeader";
import TableRow from "../components/TableRow";
import ChatHistoryModal from "../components/ChatHistoryModal";

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
  const [isChatHistoryOpen, setIsChatHistoryOpen] = useState(false);
  const [selectedChatHistory, setSelectedChatHistory] = useState("");

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const openChatHistory = (chatHistory) => {
    setSelectedChatHistory(chatHistory);
    setIsChatHistoryOpen(true);
  };

  return (
    <Box bg="gray.900" minH="100vh" p={4}>
      <TableContainer>
        <Table variant="simple" size="md">
          <Thead>
            <TableHeader />
          </Thead>
          <Tbody>
            {data.map((item, index) => (
              <TableRow key={item.id} item={item} index={index} toggleExpand={toggleExpand} openChatHistory={openChatHistory} />
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
