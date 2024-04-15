import React from "react";
import { Badge } from "@chakra-ui/react";

const ResultTag = ({ result }) => {
  let colorScheme = "gray";

  if (result === "accepted") {
    colorScheme = "green";
  } else if (result === "requires attention") {
    colorScheme = "yellow";
  } else if (result === "denied") {
    colorScheme = "red";
  }

  return (
    <Badge colorScheme={colorScheme} borderRadius="full" px={2} py={1}>
      {result}
    </Badge>
  );
};

export default ResultTag;
