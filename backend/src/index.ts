import "reflect-metadata";
import { app } from "./app";
import { Connection, createConnection } from "typeorm";
import config from "./config/index.prod";

const waitForConnection = (): Promise<Connection> =>
  createConnection(config).catch(waitForConnection);

waitForConnection().then(() => {
  const server = app.listen(3333);
  console.log("Running at ::3333");
});
