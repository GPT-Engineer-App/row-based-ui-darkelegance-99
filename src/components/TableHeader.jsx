import React from "react";
import { Tr, Th } from "@chakra-ui/react";

const TableHeader = () => (
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
);

export default TableHeader;
