import React from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";

const Index = () => {
  // Dummy data for demonstration
  const data = [
    {
      id: 1,
      created_at: "2023-04-15T10:30:00Z",
      case_started: "2023-04-01",
      personal_injury: true,
      result: "Settled",
      situation_begin: "2023-03-15",
      type_injury: "Slip and Fall",
      what_happened: "Slipped on wet floor in grocery store",
      short_summary: "Customer slipped on wet floor, injured back",
      annotations: "Surveillance video available",
      parties_involved: "Customer, Store Manager",
      consequences: "Back injury, medical bills",
      cost: 5000.0,
      chat_history: { user: "Hi, I slipped and fell in your store", agent: "I'm sorry to hear that. Can you provide more details?" },
      direct_cause: "Wet floor without warning sign",
      how_happened: "Customer walking, slipped on wet spot",
    },
  ];

  return (
    <Box bg="gray.900" minH="100vh" p={4}>
      <TableContainer>
        <Table variant="simple" size="md">
          <Thead>
            <Tr>
              <Th color="white">Created At</Th>
              <Th color="white">Case Started</Th>
              <Th color="white">Personal Injury</Th>
              <Th color="white">Result</Th>
              <Th color="white">Situation Begin</Th>
              <Th color="white">Type Injury</Th>
              <Th color="white">What Happened</Th>
              <Th color="white">Short Summary</Th>
              <Th color="white">Annotations</Th>
              <Th color="white">Parties Involved</Th>
              <Th color="white">Consequences</Th>
              <Th color="white">Cost</Th>
              <Th color="white">Chat History</Th>
              <Th color="white">Direct Cause</Th>
              <Th color="white">How Happened</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, index) => (
              <Tr key={item.id} bg={index % 2 === 0 ? "gray.900" : "gray.700"} color="white">
                <Td>{item.created_at}</Td>
                <Td>{item.case_started}</Td>
                <Td>{item.personal_injury ? "Yes" : "No"}</Td>
                <Td>{item.result}</Td>
                <Td>{item.situation_begin}</Td>
                <Td>{item.type_injury}</Td>
                <Td>{item.what_happened}</Td>
                <Td>{item.short_summary}</Td>
                <Td>{item.annotations}</Td>
                <Td>{item.parties_involved}</Td>
                <Td>{item.consequences}</Td>
                <Td>{item.cost}</Td>
                <Td>{JSON.stringify(item.chat_history)}</Td>
                <Td>{item.direct_cause}</Td>
                <Td>{item.how_happened}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Index;
