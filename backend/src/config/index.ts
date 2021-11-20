export = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "adonis",
  database: "marttech",
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
