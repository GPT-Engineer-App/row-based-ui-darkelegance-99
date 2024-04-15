import React from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";

const Index = () => {
  // Dummy data for demonstration
  const data = [
    { id: 1, name: "John Doe", age: 30, city: "New York", country: "USA" },
    { id: 2, name: "Jane Smith", age: 25, city: "London", country: "UK" },
    { id: 3, name: "Bob Johnson", age: 35, city: "Paris", country: "France" },
    { id: 4, name: "Alice Brown", age: 28, city: "Berlin", country: "Germany" },
    { id: 5, name: "Charlie Davis", age: 32, city: "Tokyo", country: "Japan" },
  ];

  return (
    <Box bg="gray.900" minH="100vh" p={4}>
      <TableContainer>
        <Table variant="simple" size="md">
          <Thead>
            <Tr>
              <Th color="white">ID</Th>
              <Th color="white">Name</Th>
              <Th color="white">Age</Th>
              <Th color="white">City</Th>
              <Th color="white">Country</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, index) => (
              <Tr key={item.id} bg={index % 2 === 0 ? "gray.900" : "gray.700"} color="white">
                <Td>{item.id}</Td>
                <Td>{item.name}</Td>
                <Td>{item.age}</Td>
                <Td>{item.city}</Td>
                <Td>{item.country}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Index;
