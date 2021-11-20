import { ReciveMessagesUseCase } from "./ReciveMessagesUseCase";
import { Broadcast } from "../Broadcast";
import { IConnectionRoomWebSocket } from "../../../types/main";
import WebSocket from "ws";

export class ReciveMessagesController {
  constructor(
    private reciveMessagesUseCase: ReciveMessagesUseCase,
    private broadcast: Broadcast
  ) {}

  async handle(
    message: string,
    connections: IConnectionRoomWebSocket[],
    roomId: number,
    socket: WebSocket
  ) {
    const messageOfBroadcast = await this.reciveMessagesUseCase.execute(
      message,
      socket
    );

    if (messageOfBroadcast !== undefined) {
      this.broadcast.emit(
        connections,
        roomId,
        JSON.stringify(messageOfBroadcast)
      );
    }
  }
}
