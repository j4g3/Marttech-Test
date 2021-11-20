import { Messages } from "../entity/Messages";
import { IMessageCreate } from "../types/main";

export interface IMessageRepository {
  findByRoomId: (id: string) => Promise<Messages[] | undefined>;
  create: (data: IMessageCreate) => Promise<Messages>;
}
