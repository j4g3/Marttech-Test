import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface IHeaderData {
  name: string;
}

function Header({ name }: IHeaderData) {
  return (
    <Flex p={4} shadow="base" alignItems="center" justifyContent="center">
      <Flex w={["90%", "70%"]} justifyContent="space-between">
        <Link to="/rooms">
          <Text fontWeight="bold">Chat</Text>
        </Link>
        <Text fontWeight="bold">Olá {name}</Text>
      </Flex>
    </Flex>
  );
}

export default Header;
