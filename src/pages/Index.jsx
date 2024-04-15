import React from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, TableContainer, Tag } from "@chakra-ui/react";

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
    {
      id: 2,
      created_at: "2023-04-16T14:45:00Z",
      case_started: "2023-04-05",
      personal_injury: false,
      result: "Accepted",
      situation_begin: "2023-04-01",
      type_injury: "Car Accident",
      what_happened: "Rear-ended at stop sign",
      short_summary: "Driver rear-ended, whiplash injury",
      annotations: "Police report filed",
      parties_involved: "Two drivers",
      consequences: "Neck pain, vehicle damage",
      cost: 8000.0,
      chat_history: { user: "I was rear-ended at a stop sign", agent: "I understand. Can you describe your injuries?" },
      direct_cause: "Distracted driving",
      how_happened: "Driver stopped at sign, rear-ended by other vehicle",
    },
    {
      id: 3,
      created_at: "2023-04-17T09:15:00Z",
      case_started: "2023-04-10",
      personal_injury: true,
      result: "Needs Attention",
      situation_begin: "2023-04-08",
      type_injury: "Workplace Injury",
      what_happened: "Fell from ladder at construction site",
      short_summary: "Worker fell from ladder, broke arm",
      annotations: "Witness statements taken",
      parties_involved: "Worker, Construction Company",
      consequences: "Broken arm, lost wages",
      cost: 12000.0,
      chat_history: { user: "I fell from a ladder at work and broke my arm", agent: "I'm sorry to hear that. How did the accident happen?" },
      direct_cause: "Unsafe working conditions",
      how_happened: "Worker climbing ladder, ladder slipped",
    },
    {
      id: 4,
      created_at: "2023-04-18T11:00:00Z",
      case_started: "2023-04-12",
      personal_injury: false,
      result: "Denied",
      situation_begin: "2023-04-10",
      type_injury: "Product Liability",
      what_happened: "Defective appliance caused fire",
      short_summary: "Defective appliance led to house fire",
      annotations: "Product recall information",
      parties_involved: "Homeowner, Appliance Manufacturer",
      consequences: "Property damage, temporary housing costs",
      cost: 50000.0,
      chat_history: { user: "My appliance caused a fire in my home", agent: "That's concerning. Can you provide the appliance details?" },
      direct_cause: "Manufacturing defect",
      how_happened: "Appliance malfunctioned, sparked fire",
    },
    {
      id: 5,
      created_at: "2023-04-19T16:30:00Z",
      case_started: "2023-04-15",
      personal_injury: true,
      result: "Settled",
      situation_begin: "2023-04-12",
      type_injury: "Dog Bite",
      what_happened: "Neighbor's dog attacked and bit",
      short_summary: "Neighbor's dog bit, causing injuries",
      annotations: "Animal control report",
      parties_involved: "Victim, Dog Owner",
      consequences: "Lacerations, medical treatment",
      cost: 3000.0,
      chat_history: { user: "I was bitten by my neighbor's dog", agent: "I apologize for your experience. Can you describe the extent of your injuries?" },
      direct_cause: "Unleashed aggressive dog",
      how_happened: "Victim walking, dog ran up and bit",
    },
  ];

  return (
    <Box bg="gray.900" minH="100vh" p={4}>
      <TableContainer>
        <Table variant="simple" size="md">
          <Thead>
            <Tr>
              <Th color="white" noOfLines={1}>
                Created At
              </Th>
              <Th color="white" noOfLines={1}>
                Case Started
              </Th>
              <Th color="white" noOfLines={1}>
                Personal Injury
              </Th>
              <Th color="white" noOfLines={1}>
                Result
              </Th>
              <Th color="white" noOfLines={1}>
                Situation Begin
              </Th>
              <Th color="white" noOfLines={1}>
                Type Injury
              </Th>
              <Th color="white" noOfLines={1}>
                What Happened
              </Th>
              <Th color="white" noOfLines={1}>
                Short Summary
              </Th>
              <Th color="white" noOfLines={1}>
                Annotations
              </Th>
              <Th color="white" noOfLines={1}>
                Parties Involved
              </Th>
              <Th color="white" noOfLines={1}>
                Consequences
              </Th>
              <Th color="white" noOfLines={1}>
                Cost
              </Th>
              <Th color="white" noOfLines={1}>
                Chat History
              </Th>
              <Th color="white" noOfLines={1}>
                Direct Cause
              </Th>
              <Th color="white" noOfLines={1}>
                How Happened
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, index) => (
              <Tr key={item.id} bg={index % 2 === 0 ? "gray.900" : "gray.700"} color="white">
                <Td noOfLines={1}>{item.created_at}</Td>
                <Td noOfLines={1}>{item.case_started}</Td>
                <Td noOfLines={1}>{item.personal_injury ? "Yes" : "No"}</Td>
                <Td>
                  <Tag colorScheme={item.result === "Accepted" ? "green" : item.result === "Needs Attention" ? "yellow" : "red"} borderRadius="full">
                    {item.result}
                  </Tag>
                </Td>
                <Td noOfLines={1}>{item.situation_begin}</Td>
                <Td noOfLines={1}>{item.type_injury}</Td>
                <Td noOfLines={1}>{item.what_happened}</Td>
                <Td noOfLines={1}>{item.short_summary}</Td>
                <Td noOfLines={1}>{item.annotations}</Td>
                <Td noOfLines={1}>{item.parties_involved}</Td>
                <Td noOfLines={1}>{item.consequences}</Td>
                <Td noOfLines={1}>{item.cost}</Td>
                <Td noOfLines={1}>{JSON.stringify(item.chat_history)}</Td>
                <Td noOfLines={1}>{item.direct_cause}</Td>
                <Td noOfLines={1}>{item.how_happened}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Index;
