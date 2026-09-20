import mongoose from "mongoose";



const MONGODB_URL = 
  process.env.MONGODB_URL || "mongodb+srv://ApurvChatur:ApurvChatur@cluster0.ohu59.mongodb.net/";
const APP_NAME = process.env.APP_NAME || "POC-02:ExpressConnection";

class MongoDBConnection {
  private connection: string = MONGODB_URL;

  constructor() {
    // Listen mongodb connection
    this.listenConnection();
  }

  private listenConnection() {
    mongoose.connection.on("connected", () => {
      console.log(`MongoDB connection created successfully...`);
      console.log("MongoDB host:", mongoose.connection.host);
      console.log("MongoDB port:", mongoose.connection.port);
      console.log("MongoDB database:", mongoose.connection.name);
    });
    mongoose.connection.on("error", (error) => {
      console.log(`MongoDB connection failed: ${error}`);
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