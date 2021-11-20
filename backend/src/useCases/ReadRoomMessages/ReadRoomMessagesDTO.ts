import { Messages } from "../../entity/Messages";

export interface ReadRoomMessagesResponseDTO {
  id: string;
  name: string;
  createdAt: Date;
  messages?: Messages[];
}
