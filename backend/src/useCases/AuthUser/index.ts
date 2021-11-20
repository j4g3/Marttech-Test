import { PostgresUserRepository } from "../../repositories/implementations/PostgresUserRepository";
import { AuthUserUseCase } from "./AuthUserUseCase";
import { AuthUserController } from "./AuthUserController";

const postgresUserRepository = new PostgresUserRepository();

const readUserUseCase = new AuthUserUseCase(postgresUserRepository);
const authUserController = new AuthUserController(readUserUseCase);

export { readUserUseCase, authUserController };
