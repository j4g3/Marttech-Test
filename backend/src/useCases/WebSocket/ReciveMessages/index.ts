import { PostgresMessagesRepository } from "../../../repositories/implementations/PostgresMessageRepository";
import { PostgresRoomRepository } from "../../../repositories/implementations/PostgresRoomRepository";
import { PostgresUserRepository } from "../../../repositories/implementations/PostgresUserRepository";
import { AuthUserUseCase } from "../../../useCases/AuthUser/AuthUserUseCase";
import { Broadcast } from "../Broadcast";

import { ReciveMessagesController } from "./ReciveMessagesController";
import { ReciveMessagesUseCase } from "./ReciveMessagesUseCase";

const postgresMessagesRepository = new PostgresMessagesRepository();
const postgresRoomRepository = new PostgresRoomRepository();
const postgresUserRepository = new PostgresUserRepository();

const authUserUseCase = new AuthUserUseCase(postgresUserRepository);

const broadcast = new Broadcast();
const reciveMessagesUseCase = new ReciveMessagesUseCase(
  postgresMessagesRepository,
  postgresRoomRepository,
  authUserUseCase
);

const reciveMessagesController = new ReciveMessagesController(
  reciveMessagesUseCase,
  broadcast
);

export { reciveMessagesUseCase, reciveMessagesController };
