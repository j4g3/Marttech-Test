import { IRoomRepository } from "../../../repositories/iRoomRepository";

export class ValidateRoomUseCase {
  constructor(private iRoomRepository: IRoomRepository) {}

  async handle(roomName: string) {
    const roomAlreadyExists = await this.iRoomRepository.findByName(roomName);

    return roomAlreadyExists || undefined;
  }
}
