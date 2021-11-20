import { Request, Response } from "express";
import { ModifyRoomUseCase } from "./ModifyRoomUseCase";

export class ModifyRoomController {
  constructor(private modifyRoomUseCase: ModifyRoomUseCase) {}

  async handle(request: Request, response: Response) {
    const { id, new_name } = request.body;

    try {
      const room = await this.modifyRoomUseCase.execute({ id, new_name });

      return response.status(200).json(room);
    } catch (err) {
      return response
        .status(401)
        .json({ message: err.message || "Unexpected error." });
    }
  }
}
