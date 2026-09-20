import express from "express";
import path from "path";
import fs from "fs/promises";
import { getEnv } from "./EnvironmentConnection.js";


const ENV = getEnv.ENV;
const MACHINE = getEnv.MACHINE;
const PORT = getEnv.PORT;
const APP_NAME = getEnv.APP_NAME;

class ExpressConnection {
  private connection!: express.Express;
  
  constructor() {
    this.createConnection();
    this.serverStatic();
    this.setRoute();
  }

  private createConnection() {
    this.connection = express();
  } 

  private serverStatic() {
    this.connection.use(express.static(path.join(process.cwd(), "public")));
  }

  private setRoute() {
    this.connection.get("/", async (_request, response) => {
      const indexHTML = await fs.readFile(
        path.join(process.cwd(), "index.html"),
        "utf-8"
      )

      const updatedHTML = indexHTML.
        replace("{{ ENV }}", ENV).
        replace("{{ MACHINE }}", MACHINE).
        replace("{{ PORT }}", String(PORT)).
        replace("{{ APP_NAME }}", APP_NAME);

      response.send(updatedHTML);
    });

    this.connection.get("/health", (_request, response) => {
      response.status(200).json({
        success: true,
        status: "ok",
        message: "Node + Express server is healthy"
      });
    });
  }

  public listenConnection() {
    this.connection.listen(PORT, () => {
      console.log(`Node + Express connection listening on http://localhost:${PORT}`);
      console.log(`
        url: http://localhost:${PORT}
        PORT: ${PORT}
        APP_NAME: ${APP_NAME}
      `);
    })
  }

  getConnection() {
    return this.connection
  }
}

const expressConnection = new ExpressConnection();
export default expressConnection;
