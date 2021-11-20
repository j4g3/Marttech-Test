import { WebSocket } from "ws";

export interface IUserCreate {
  name: string;
  email: string;
  password: string;
}

export interface IRoomCreate {
  name: string;
}

export interface IRoomUpdate {
  id: string;
  new_name: string;
}

export interface IMessageCreate {
  description: string;
  user_id: string;
  room_id: string;
}

export interface IConnectionRoomWebSocket {
  room: string;
  clients: WebSocket[];
}
