import { IRoomRepository } from "../../repositories/iRoomRepository";
import { ICreateRoomRequestDTO } from "./CreateRoomDTO";

export class CreateRoomUseCase {
  constructor(private roomsRepository: IRoomRepository) {}

  async execute(data: ICreateRoomRequestDTO) {
    const roomAlreadyExists = await this.roomsRepository.findByName(data.name);

    if (roomAlreadyExists) {
      throw new Error(`Room ${data.name} already exists`);
    }

    return await this.roomsRepository.create(data).then((data) => data);
  }
}
