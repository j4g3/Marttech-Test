import { ConnectionOptions } from "typeorm/connection/ConnectionOptions";

const config: ConnectionOptions = {
  type: "postgres",
  host: "api-db",
  port: 5432,
  username: "postgres",
  password: "precisa_mudar_isso_aqui",
  database: "marttech-test",
  synchronize: true,
  logging: false,
  entities: ["build/entity/**/*.js"],
  migrations: ["build/migration/**/*.js"],
  subscribers: ["build/subscriber/**/*.js"],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber",
  },
};

export default config;
