import { Request, Response } from "express";
import { ShowRoomsUseCase } from "./ShowRoomsUseCase";

export class ShowRoomsController {
  constructor(private showRoomsUseCase: ShowRoomsUseCase) {}
  async handle(request: Request, response: Response) {
    try {
      const rooms = await this.showRoomsUseCase.execute();

      return response.status(200).json(rooms);
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message || "Unexpected error." });
    }
  }
}
