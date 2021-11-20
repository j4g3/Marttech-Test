import { getRepository } from "typeorm";
import { Messages } from "../../entity/Messages";
import { IMessageCreate } from "../../types/main";
import { IMessageRepository } from "../iMessagesRepository";

export class PostgresMessagesRepository implements IMessageRepository {
  async findByRoomId(id: string) {
    const room = await getRepository(Messages).find({ where: { room_id: id } });
    console.log(room);
    console.log(id);
    return room;
  }

  async create(data: IMessageCreate) {
    return await getRepository(Messages).save(data);
  }
}
