import WebSocket from "ws";
import { Rooms } from "../../../entity/Rooms";
import { Users } from "../../../entity/Users";
import { IMessageRepository } from "../../../repositories/iMessagesRepository";
import { IRoomRepository } from "../../../repositories/iRoomRepository";
import { AuthUserUseCase } from "../../AuthUser/AuthUserUseCase";
import {
  ReciveMessageUseCaseDTO,
  ReciveMessageUseCaseResponseDTO,
} from "./ReciveMessagesUseDTO";

export class ReciveMessagesUseCase {
  constructor(
    private iMessageRepository: IMessageRepository,
    private iRoomRepository: IRoomRepository,
    private authUserUseCase: AuthUserUseCase
  ) {}

  async execute(
    message: string,
    socket: WebSocket
  ): Promise<ReciveMessageUseCaseResponseDTO | void> {
    const UserAndMessageObject: ReciveMessageUseCaseDTO = JSON.parse(
      `${message}`
    );
    let user: Users | undefined = undefined;

    try {
      user = await this.authUserUseCase.execute({
        authorization: `Basic ${UserAndMessageObject.basicauth}`,
      });
      if (user === undefined) {
        socket.send("Invalid auth");
        return socket.close();
      }
    } catch (err) {
      socket.send("Invalid auth");
      return socket.close();
    }

    let room: Rooms;
    try {
      room = await this.iRoomRepository.findByName(UserAndMessageObject.room);

      if (room === undefined) {
        socket.send("Invalid room");
        socket.close();
      }
    } catch (err) {
      socket.send("Invalid room");
      return socket.close();
    }

    console.log(
      await this.iMessageRepository.create({
        description: UserAndMessageObject.text,
        room_id: room.id,
        user_id: user.id,
      })
    );
    console.log("------");
    console.log(await this.iMessageRepository.findByRoomId(room.id));

    return { text: UserAndMessageObject.text, user_name: user.name };
  }
}
