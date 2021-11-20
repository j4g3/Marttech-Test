import WebSocket from "ws";
import { IConnectionRoomWebSocket } from "../../../types/main";

export class Broadcast {
  async emit(
    connections: IConnectionRoomWebSocket[],
    roomId: number,
    message: string,
    isBinary: boolean = false
  ) {
    return connections[roomId].clients.forEach((socket) => {
      socket.send(message, { binary: isBinary });
    });
  }
}
