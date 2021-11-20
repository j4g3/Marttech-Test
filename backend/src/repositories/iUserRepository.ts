import { Users } from "../entity/Users";
import { IUserCreate } from "../types/main";

export interface IUserRepository {
  findById: (id: string) => Promise<Users | undefined>;
  findByEmail: (email: string) => Promise<Users | undefined>;
  create: (data: IUserCreate) => Promise<Users>;
}
