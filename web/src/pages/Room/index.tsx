import React, { useLayoutEffect, useState } from "react";
import Header from "../../components/Header";
import api from "../../services/api";
import { useParams } from "react-router-dom";
import { Flex, Input, Button, Stack, Text } from "@chakra-ui/react";
import { config } from "../../config/index";
import useWebSocket from "react-use-websocket";
import { useForm } from "react-hook-form";

// import { Container } from './styles';
interface IAuthUser {
  name: string;
  email: string;
}

interface IMessageResponse {
  text: string;
  user_name: string;
}

interface IMessageResponseData {
  description: string;
  user_id: string;
}

interface IGetRoomMessages {
  id: string;
  name: string;
  createdAt: string;
  messages: IMessageResponseData[];
}

interface IMessageRequest {
  text: string;
}

const RoomPages: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [messages, setMessages] = useState<IMessageResponseData[]>([]);

  const [sendMessageInput, setSendMessageInput] = useState<string>("");

  const { register, handleSubmit } = useForm();

  const { roomName } = useParams<{ roomName: string }>();
  const [socketUrl] = useState<string>(`${config.websocket}/room/${roomName}`);

  const { sendMessage } = useWebSocket(socketUrl, {
    onMessage: (messageSocket) => {
      const message: IMessageResponse = JSON.parse(messageSocket.data);
      const messagesArray = messages;

      messagesArray.push({
        description: message.text,
        user_id: message.user_name,
      });

      setMessages(messagesArray);
    },
  });

  const handleSendMessage = (data: IMessageRequest) => {
    sendMessage(
      JSON.stringify(
        Object({
          basicauth: localStorage.getItem("@marttech:basicauth"),
          text: sendMessageInput,
          room: roomName,
        })
      )
    );

    setSendMessageInput("");
  };

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
      const response = await api.get<IGetRoomMessages>(`/rooms/${roomName}`);
      setMessages(response.data.messages);
    })();
  }, [roomName]);

  return (
    <Flex h="100vh" flexDir="column" justifyContent="space-between">
      <Header name={name} />
      <Stack
        as={Flex}
        h="100%"
        bg="white"
        p={2}
        direction="column"
        overflow="auto"
        spacing={2}
      >
        {messages.map((item) => (
          <Flex bg="gray.100" p={2} rounded="md" flexDir="column">
            <Text>{item.user_id}</Text>
            <Text>{item.description}</Text>
          </Flex>
        ))}
      </Stack>
      <Stack
        p={4}
        alignItems="center"
        justifyContent="center"
        direction="row"
        as="form"
        onSubmit={handleSubmit(handleSendMessage)}
        mt={2}
      >
        <Input
          {...register("text")}
          placeholder="Mensagem"
          onChange={(e) => {
            setSendMessageInput(e.target.value);
          }}
          value={sendMessageInput}
        />

        <Button colorScheme="green" type="submit">
          Enviar
        </Button>
      </Stack>
    </Flex>
  );
};

export default RoomPages;
