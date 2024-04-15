import React, { useState } from "react";
import { Box, Text, Icon, Input, Button } from "@chakra-ui/react";
import { FaLock } from "react-icons/fa";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = () => {
   
    if (email === "user@example.com" && password === "password") {
      setIsSignedIn(true);
    } else {
      alert("Invalid email or password");
    }

    
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" bg="gray.900" color="white">
      {isSignedIn ? (
        <Text>Welcome! You are signed in.</Text>
      ) : (
        <>
          <Icon as={FaLock} boxSize={12} mb={4} />
          <Text fontSize="xl" mb={6}>
            Please sign in to access the application.
          </Text>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            mb={4}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            mb={6}
          />
          <Button onClick={handleSignIn} colorScheme="blue">
            Sign In
          </Button>
        </>
      )}
    </Box>
  );
};

export default Index;
