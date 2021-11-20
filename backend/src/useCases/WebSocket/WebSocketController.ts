import WebSocket from "ws";
import { Request } from "express";
import { IConnectionRoomWebSocket } from "../../types/main";
import { WebSocketUseCase } from "./WebSocketUseCase";

export class WebSocketController {
  constructor(private webSocketUseCase: WebSocketUseCase) {}

  async handle(
    socket: WebSocket,
    request: Request,
    connections: IConnectionRoomWebSocket[]
  ) {
    return await this.webSocketUseCase.execute(socket, request, connections);
  }
}
