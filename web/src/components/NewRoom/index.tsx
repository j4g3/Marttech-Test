import React from "react";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  ModalFooter,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import api from "../../services/api";

// import { Container } from './styles';

interface ICreateRoom {
  room: string;
}

const NewRoom: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit } = useForm();
  const toast = useToast();

  const handleCreateRoom = async (data: ICreateRoom) => {
    try {
      const response = await api.post("/rooms", {
        name: data.room,
      });
      if (response.status === 201) {
        toast({
          position: "top-right",
          title: "Sala criada com sucesso!",
          status: "success",
          duration: 1000,
        });
      }
    } catch (err: any) {
      if (err.response.status === 400) {
        toast({
          position: "top-right",
          title: "Sala já existe",
          status: "error",
          duration: 1000,
        });
      }
    }
  };

  return (
    <>
      <Button onClick={onOpen}>Criar nova sala</Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Nova sala</ModalHeader>
          <ModalCloseButton />
          <ModalBody as="form" onSubmit={handleSubmit(handleCreateRoom)}>
            <Input placeholder="Nome da sala" {...register("room")} />

            <Button type="submit" w="100%" mt={2}>
              Criar sala
            </Button>
          </ModalBody>

          <ModalFooter w="100%">
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewRoom;
