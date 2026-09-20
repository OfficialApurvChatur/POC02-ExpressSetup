import mongoose from "mongoose";
import { getEnv } from "./EnvironmentConnection.js";



const MONGODB_URL = getEnv.MONGODB_URL;
const APP_NAME = getEnv.APP_NAME;

class MongoDBConnection {
  private connection: string = MONGODB_URL;

  constructor() {
    // Listen mongodb connection
    this.listenConnection();
  }

  private listenConnection() {
    mongoose.connection.on("connected", () => {
      console.log(`MongoDB connection created successfully...`);
      console.log(`
        host: ${mongoose.connection.host}
        port: ${mongoose.connection.port}
        database: ${mongoose.connection.name}
      `);
    });
    mongoose.connection.on("error", (error) => {
      console.log(`MongoDB connection failed: ${error}`);
      process.exit(0);
    });
  }

  public async createConnection() {
    await mongoose.connect(this.connection, {
      dbName: APP_NAME
    })
  }
}

const mongoDBConnection = new MongoDBConnection();
export default mongoDBConnection;