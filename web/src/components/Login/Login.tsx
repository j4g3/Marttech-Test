import React from "react";
import api from "../../services/api";
import { useForm } from "react-hook-form";
import { useToast } from "@chakra-ui/react";
import { Flex, Heading, Input, Stack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface iLogin {
  email: string;
  password: string;
}

const LoginHome: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const toast = useToast();

  const handleLogin = async (data: iLogin) => {
    console.log(data);
    try {
      const response = await api.get("/users", {
        auth: {
          username: data.email,
          password: data.password,
        },
      });
      localStorage.setItem(
        "@marttech:basicauth",
        Buffer.from(`${data.email}:${data.password}`).toString("base64")
      );
      if (response.status === 200) {
        toast({
          title: "Logado com sucesso",
          status: "success",
          position: "top-right",
          duration: 1000,
        });
        setTimeout(() => {
          window.location.href = "/rooms";
        }, 1100);
      }
    } catch (err: any) {
      if (err.response.status === 401) {
        toast({
          title: err.response.data.message,
          status: "error",
          position: "top-right",
          duration: 1000,
        });
      }
    }
  };

  return (
    <Flex
      p={4}
      rounded="md"
      shadow="base"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      minH={["40vh"]}
      w={["90vw", "90vw", "90vw", "40vw", "40vw"]}
    >
      <Heading textTransform="uppercase">Realizar login</Heading>
      <Stack
        w={["90%", "90%", "90%", "70%", "70%"]}
        as="form"
        onSubmit={handleSubmit(handleLogin)}
        mt={4}
        spacing={4}
      >
        <Input {...register("email")} placeholder="E-mail" type="email" />

        <Input
          {...register("password")}
          placeholder="Password"
          type="password"
        />

        <Button type="submit" colorScheme="green">
          Logar
        </Button>
        <Link to="/signup">
          <Button w="100%">Cadastrar-me</Button>
        </Link>
      </Stack>
    </Flex>
  );
};

export default LoginHome;
