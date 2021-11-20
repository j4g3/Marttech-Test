import express from "express";
import expressWs from "express-ws";
import bodyParser from "body-parser";
import { createUserController } from "./useCases/CreateUser";
import { createRoomController } from "./useCases/CreateRoom";
import { showRoomsController } from "./useCases/ShowRooms";
import { modifuRoomController } from "./useCases/ModifyRoom";
import { authUserController } from "./useCases/AuthUser";
import { readRoomMessagesController } from "./useCases/ReadRoomMessages";
import { IConnectionRoomWebSocket } from "./types/main";
import { webSocketController } from "./useCases/WebSocket";
import cors from "cors";

let connections: IConnectionRoomWebSocket[] = [];
const ws = expressWs(express());
const { app } = ws;

app.use(bodyParser.json());

app.use(cors());

app.get("/users", (request, response) =>
  authUserController.handle(request, response)
);

app.post("/users", (request, response) =>
  createUserController.handle(request, response)
);

app.get("/rooms", (request, response) =>
  showRoomsController.handle(request, response)
);

app.get("/rooms/:roomName", (request, response) =>
  readRoomMessagesController.handle(request, response)
);

app.put("/rooms", (request, response) =>
  modifuRoomController.handle(request, response)
);

app.post("/rooms", (request, response) =>
  createRoomController.handle(request, response)
);

app.ws("/room/:name", (socket, request) =>
  webSocketController.handle(socket, request, connections)
);

export { app };
