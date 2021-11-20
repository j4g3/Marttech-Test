import React from "react";
import { Flex } from "@chakra-ui/react";
import Signup from "../../components/Signup/Signup";

const SignupHome: React.FC = () => {
  return (
    <Flex minH="100vh" h="auto" justifyContent="center" alignItems="center">
      <Signup />
    </Flex>
  );
};

export default SignupHome;
