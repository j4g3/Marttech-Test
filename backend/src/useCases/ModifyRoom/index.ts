import { PostgresRoomRepository } from "../../repositories/implementations/PostgresRoomRepository";
import { ModifyRoomController } from "./ModifyRoomController";
import { ModifyRoomUseCase } from "./ModifyRoomUseCase";

const postgresRoomRepository = new PostgresRoomRepository();

const modifyRoomUseCase = new ModifyRoomUseCase(postgresRoomRepository);
const modifuRoomController = new ModifyRoomController(modifyRoomUseCase);

export { modifyRoomUseCase, modifuRoomController };
