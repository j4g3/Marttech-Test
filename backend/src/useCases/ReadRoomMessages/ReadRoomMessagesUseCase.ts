import { IRoomRepository } from "../../repositories/iRoomRepository";
import { IMessageRepository } from "../../repositories/iMessagesRepository";
import { IUserRepository } from "../../repositories/iUserRepository";
import { Users } from "../../entity/Users";
import { Messages } from "../../entity/Messages";
import { ReadRoomMessagesResponseDTO } from "./ReadRoomMessagesDTO";

export class ReadRoomMessagesUseCase {
  constructor(
    private iRoomRepository: IRoomRepository,
    private iMessagesRepository: IMessageRepository,
    private iUserRepository: IUserRepository
  ) {}

  async execute(roomName: string) {
    const room = await this.iRoomRepository.findByName(roomName);

    if (!room) {
      throw new Error("Room not found");
    }

    let roomMessages: Messages[] = [];
    let messages = await this.iMessagesRepository.findByRoomId(room.id);

    for (let i = 0; i < messages.length; i++) {
      const message = messages[i];
      const user = await this.iUserRepository.findById(message.user_id);
      message.user_id = user.name;
      delete message.room_id;
      roomMessages.push(message);
    }

    const roomWithMessages: ReadRoomMessagesResponseDTO = {
      ...room,
      messages: roomMessages,
    };

    return roomWithMessages;
  }
}
