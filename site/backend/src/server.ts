import expressConnection from "./aConnection/ExpressConnection.js"
import mongoDBConnection from "./aConnection/MongoDBConnection.js";


const init = async () => {
  // Create mongodb connection
  await mongoDBConnection.createConnection();

  // Listen express connection
  expressConnection.listenConnection();
}

init();
