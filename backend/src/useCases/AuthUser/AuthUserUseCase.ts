import { IUserRepository } from "../../repositories/iUserRepository";
import { IReadUserRequestDTO } from "./AuthUserDTO";
import argon2 from "argon2";

export class AuthUserUseCase {
  constructor(private usersRepository: IUserRepository) {}

  async execute(data: IReadUserRequestDTO) {
    const [email, password] = Buffer.from(
      data.authorization.split(" ")[1],
      "base64"
    )
      .toString()
      .split(":");
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (!userAlreadyExists) {
      throw new Error("Email or password not found");
    }

    if (!(await argon2.verify(userAlreadyExists.password, password))) {
      throw new Error("Email or password not found");
    }

    delete userAlreadyExists.password;
    return userAlreadyExists;
  }
}
