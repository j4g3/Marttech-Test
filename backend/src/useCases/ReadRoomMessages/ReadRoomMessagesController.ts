import { Request, Response } from "express";
import { ReadRoomMessagesUseCase } from "./ReadRoomMessagesUseCase";

export class ReadRoomMessagesController {
  constructor(private readRoomMessagesUseCase: ReadRoomMessagesUseCase) {}

  async handle(request: Request, response: Response) {
    const { roomName } = request.params;
    try {
      const roomMessages = await this.readRoomMessagesUseCase.execute(roomName);
      console.log(roomMessages);
      return response.status(200).json(Object(roomMessages));
    } catch (err) {
      return response
        .status(404)
        .json({ message: err.message || "Unexpected error." });
    }
  }
}
