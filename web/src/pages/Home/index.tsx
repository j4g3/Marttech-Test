import React from "react";
import { Flex } from "@chakra-ui/react";
import LoginHome from "../../components/Login/Login";

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Flex minH="100vh" h="auto" justifyContent="center" alignItems="center">
      <LoginHome />
    </Flex>
  );
};

export default Home;
