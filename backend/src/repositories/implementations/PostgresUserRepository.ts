import { getRepository } from "typeorm";
import { Users } from "../../entity/Users";
import argon2 from "argon2";
import { IUserRepository } from "../iUserRepository";
import { IUserCreate } from "../../types/main";

export class PostgresUserRepository implements IUserRepository {
  async findById(id: string) {
    const user = await getRepository(Users).findOne({ where: { id } });

    return user || undefined;
  }

  async findByEmail(email: string) {
    const user = await getRepository(Users).findOne({ where: { email } });

    return user || undefined;
  }

  async create(data: IUserCreate) {
    data.password = await argon2.hash(data.password);

    return await getRepository(Users).save(data);
  }
}
