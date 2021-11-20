import React, { useLayoutEffect, useState } from "react";
import Header from "../../components/Header";
import api from "../../services/api";
import { Flex, Grid, GridItem, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import NewRoom from "../../components/NewRoom";

interface IAuthUser {
  name: string;
  email: string;
}

interface IRooms {
  id: string;
  name: string;
  createdAt: Date;
}

const Rooms: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [rooms, setRooms] = useState<IRooms[]>([]);

  useLayoutEffect(() => {
    (async () => {
      const response = await api.get<IAuthUser>("/users", {
        headers: {
          Authorization: `Basic ${localStorage.getItem("@marttech:basicauth")}`,
        },
      });

      setName(response.data.name);
    })();

    (async () => {
      const response = await api.get<IRooms[]>("/rooms");

      setRooms(response.data);
    })();
  }, []);

  return (
    <Flex minH="100vh" h="auto" flexDirection="column">
      <Header name={name} />
      <Flex as="main" mt={5} alignItems="center" justifyContent="center">
        <Flex w={["90%", "70%"]} flexDir="column">
          <NewRoom />
          <Grid
            gridTemplateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
            ]}
            gridTemplateRows={["repeat(3, 1fr)", "repeat(3, 1fr)"]}
            gridGap="4px"
            minH="50vh"
            h="100%"
            mt={2}
          >
            {rooms.map((room) => (
              <>
                <Flex
                  as={GridItem}
                  h="100%"
                  w="100%"
                  bg="gray.300"
                  rounded="md"
                  p={2}
                  justifyContent="center"
                  alignItems="center"
                  flexDir="column"
                >
                  <Heading color="#333">Sala - {room.name}</Heading>
                  <Link to={`/rooms/${room.name}`}>
                    <Button>Entrar na sala</Button>
                  </Link>
                </Flex>
              </>
            ))}
          </Grid>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Rooms;
