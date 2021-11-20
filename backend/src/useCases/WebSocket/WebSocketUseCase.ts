import WebSocket from "ws";
import { Request } from "express";
import { IConnectionRoomWebSocket } from "../../types/main";
import { RemoveSocketOfConnections } from "./RemoveSocketOfConnections";
import { reciveMessagesController } from "./ReciveMessages/index";

export class WebSocketUseCase {
  async execute(
    socket: WebSocket,
    request: Request,
    connections: IConnectionRoomWebSocket[]
  ) {
    var roomId: number | null = null;
    var connectionId: number;

    connections.forEach((connection, index) => {
      if (connection.room === request.path.toString()) {
        roomId = index;
      }
    });

    if (roomId === null) {
      connections.push({ room: request.path, clients: [socket] });

      roomId = connections.length - 1;

      connectionId = 0;
    } else {
      connections[roomId].clients.push(socket);

      connectionId = connections[roomId].clients.length - 1;
    }

    socket.on(
      "close",
      () =>
        (connections[roomId].clients = RemoveSocketOfConnections(
          connections,
          roomId,
          connectionId
        ))
    );

    socket.on("message", (message) =>
      reciveMessagesController.handle(
        message.toString(),
        connections,
        roomId,
        socket
      )
    );
  }
}
