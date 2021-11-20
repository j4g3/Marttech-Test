import { PostgresRoomRepository } from "../../../repositories/implementations/PostgresRoomRepository";

import { ValidateRoomController } from "./ValidateRoomController";
import { ValidateRoomUseCase } from "./ValidateRoomUseCase";
const postgresRoomRepository = new PostgresRoomRepository();

const validateRoomUseCase = new ValidateRoomUseCase(postgresRoomRepository);
const validateRoomController = new ValidateRoomController(validateRoomUseCase);

export { validateRoomController };
