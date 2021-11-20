import { IRoomRepository } from "../../repositories/iRoomRepository";

export class ShowRoomsUseCase {
  constructor(private roomsRepository: IRoomRepository) {}

  async execute() {
    return await this.roomsRepository.findAllRooms();
  }
}
