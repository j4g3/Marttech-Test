import { PostgresRoomRepository } from "../../repositories/implementations/PostgresRoomRepository";
import { PostgresMessagesRepository } from "../../repositories/implementations/PostgresMessageRepository";
import { PostgresUserRepository } from "../../repositories/implementations/PostgresUserRepository";

import { ReadRoomMessagesController } from "./ReadRoomMessagesController";
import { ReadRoomMessagesUseCase } from "./ReadRoomMessagesUseCase";

const postgresRoomRepository = new PostgresRoomRepository();
const postgresMessagesRepository = new PostgresMessagesRepository();
const postgresUserRepository = new PostgresUserRepository();

const readRoomMessagesUseCase = new ReadRoomMessagesUseCase(
  postgresRoomRepository,
  postgresMessagesRepository,
  postgresUserRepository
);
const readRoomMessagesController = new ReadRoomMessagesController(
  readRoomMessagesUseCase
);

export { readRoomMessagesUseCase, readRoomMessagesController };
