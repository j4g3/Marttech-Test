import { ValidateRoomUseCase } from "./ValidateRoomUseCase";

export class ValidateRoomController {
  constructor(private validateRoomUseCase: ValidateRoomUseCase) {}

  async handle(roomName: string) {
    roomName = roomName.replace("/room/", "").replace("/.websocket", "");

    return await this.validateRoomUseCase.handle(roomName);
  }
}
