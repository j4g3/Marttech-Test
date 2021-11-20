import { Request, Response } from "express";
import { CreateRoomUseCase } from "./CreateRoomUseCase";

export class CreateRoomController {
  constructor(private createRoomUseCaseService: CreateRoomUseCase) {}

  async handle(request: Request, response: Response) {
    const { name } = request.body;

    try {
      const room = await this.createRoomUseCaseService.execute({ name });

      return response.status(201).json(room);
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message || "Unexpected error." });
    }
  }
}
