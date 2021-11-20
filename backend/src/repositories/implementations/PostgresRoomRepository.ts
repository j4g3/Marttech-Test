import { getRepository } from "typeorm";
import { Rooms } from "../../entity/Rooms";
import { IRoomCreate, IRoomUpdate } from "../../types/main";
import { IRoomRepository } from "../iRoomRepository";

export class PostgresRoomRepository implements IRoomRepository {
  async findById(id: string) {
    const room = await getRepository(Rooms).findOne({ where: { id } });
    return room || undefined;
  }

  async findByName(name: string) {
    const room = await getRepository(Rooms).findOne({ where: { name } });
    return room || undefined;
  }

  async create(data: IRoomCreate) {
    return await getRepository(Rooms).save(data);
  }

  async findAllRooms() {
    const rooms = await getRepository(Rooms).find();
    return rooms;
  }

  async modifyById(data: IRoomUpdate) {
    await getRepository(Rooms).update(data.id, {
      name: data.new_name,
    });

    const room = await getRepository(Rooms).findOne({ where: { id: data.id } });
    return room;
  }
}
