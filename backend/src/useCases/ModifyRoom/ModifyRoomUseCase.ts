import { IRoomRepository } from "../../repositories/iRoomRepository";
import { IModifyRoomRequestDTO } from "./ModifyRoomDTO";

export class ModifyRoomUseCase {
  constructor(private roomsRepository: IRoomRepository) {}

  async execute(data: IModifyRoomRequestDTO) {
    const roomAlreadyExists = await this.roomsRepository.findById(data.id);

    if (!roomAlreadyExists) {
      throw new Error(`Room not found: ${data.id}`);
    }

    return await this.roomsRepository.modifyById(data);
  }
}
