import React from "react";
import { Tr, Td, Button, Box } from "@chakra-ui/react";
import { FaExpandAlt, FaExternalLinkAlt } from "react-icons/fa";
import ResultTag from "./ResultTag";

const TableRow = ({ item, index, toggleExpand, openChatHistory }) => (
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
);

export default TableRow;
