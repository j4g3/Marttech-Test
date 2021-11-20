import React from "react";
import api from "../../services/api";
import { useForm } from "react-hook-form";
import { useToast } from "@chakra-ui/react";
import { Flex, Heading, Input, Stack, Button } from "@chakra-ui/react";

interface iLogin {
  name: string;
  email: string;
  password: string;
}

const Signup: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const toast = useToast();

  const handleLogin = async (data: iLogin) => {
    console.log(data);
    try {
      const response = await api.post("/users", data);
      if (response.status === 201) {
        toast({
          title: "Conta criada com sucesso",
          status: "success",
          position: "top-right",
          duration: 1000,
        });
        setTimeout(() => {
          window.location.href = "/";
        }, 1100);
      }
    } catch (err: any) {
      if (err.response.status === 400) {
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
      <Heading textTransform="uppercase">Cadastrar</Heading>
      <Stack
        w={["90%", "90%", "90%", "70%", "70%"]}
        as="form"
        onSubmit={handleSubmit(handleLogin)}
        mt={4}
        spacing={4}
      >
        <Input {...register("name")} placeholder="Seu nome" type="text" />
        <Input {...register("email")} placeholder="E-mail" type="email" />

        <Input
          {...register("password")}
          placeholder="Password"
          type="password"
        />

        <Button type="submit">Cadastrar</Button>
      </Stack>
    </Flex>
  );
};

export default Signup;
