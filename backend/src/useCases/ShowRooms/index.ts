import { PostgresRoomRepository } from "../../repositories/implementations/PostgresRoomRepository";

import { ShowRoomsController } from "./ShowRoomController";
import { ShowRoomsUseCase } from "./ShowRoomsUseCase";
const postgresRoomRepository = new PostgresRoomRepository();

const showRoomsUseCase = new ShowRoomsUseCase(postgresRoomRepository);
const showRoomsController = new ShowRoomsController(showRoomsUseCase);

export { showRoomsUseCase, showRoomsController };
