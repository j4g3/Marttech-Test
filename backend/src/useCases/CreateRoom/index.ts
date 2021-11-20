import { PostgresRoomRepository } from "../../repositories/implementations/PostgresRoomRepository";
import { CreateRoomUseCase } from "./CreateRoomUseCase";
import { CreateRoomController } from "./CreateRoomController";

const postgresRoomRepository = new PostgresRoomRepository();

const createRoomUseCase = new CreateRoomUseCase(postgresRoomRepository);
const createRoomController = new CreateRoomController(createRoomUseCase);

export { createRoomUseCase, createRoomController };
