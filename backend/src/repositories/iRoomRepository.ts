import { Rooms } from "../entity/Rooms";
import { IRoomCreate, IRoomUpdate } from "../types/main";

export interface IRoomRepository {
  findById: (id: string) => Promise<Rooms | undefined>;
  findByName: (name: string) => Promise<Rooms | undefined>;
  create: (data: IRoomCreate) => Promise<Rooms>;
  findAllRooms: () => Promise<Rooms[] | undefined>;
  modifyById: (data: IRoomUpdate) => Promise<Rooms>;
}
