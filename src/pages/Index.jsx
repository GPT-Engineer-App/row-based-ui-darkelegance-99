import React from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";

const Index = () => {
  // Dummy data for demonstration
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
    },
  ];

  return (
    <Box bg="gray.900" minH="100vh" p={4}>
      <TableContainer>
        <Table variant="simple" size="md">
          <Thead>
            <Tr>
              <Th color="white" minWidth="300px">
                Created At
              </Th>
              <Th color="white" minWidth="300px">
                Case Started
              </Th>
              <Th color="white" minWidth="300px">
                Personal Injury
              </Th>
              <Th color="white" minWidth="300px">
                Result
              </Th>
              <Th color="white" minWidth="300px">
                Situation Begin
              </Th>
              <Th color="white" minWidth="300px">
                Type Injury
              </Th>
              <Th color="white" minWidth="300px">
                What Happened
              </Th>
              <Th color="white" minWidth="300px">
                How Happened
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, index) => (
              <Tr key={item.id} bg={index % 2 === 0 ? "gray.900" : "gray.700"} color="white">
                <Td maxWidth="300px" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" height="48px">
                  {item.created_at}
                </Td>
                <Td maxWidth="300px" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" height="48px">
                  {item.case_started}
                </Td>
                <Td maxWidth="300px" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" height="48px">
                  {item.personal_injury ? "Yes" : "No"}
                </Td>
                <Td maxWidth="300px" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" height="48px">
                  {item.result}
                </Td>
                <Td maxWidth="300px" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" height="48px">
                  {item.situation_begin}
                </Td>
                <Td maxWidth="300px" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" height="48px">
                  {item.type_injury}
                </Td>
                <Td maxWidth="300px" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" height="48px">
                  {item.what_happened}
                </Td>
                <Td maxWidth="300px" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" height="48px">
                  {item.how_happened}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Index;
