import { Request, Response } from "express";
import { AuthUserUseCase } from "./AuthUserUseCase";

export class AuthUserController {
  constructor(private readUserUseCase: AuthUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const user = await this.readUserUseCase.execute({
        authorization: request.headers.authorization,
      });

      return response.status(200).json(user);
    } catch (err) {
      return response.status(401).json({ message: err.message });
    }
  }
}
