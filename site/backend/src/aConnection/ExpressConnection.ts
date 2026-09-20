import express from "express";
import path from "path";


const PORT = process.env.PORT || 8000;

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
    this.connection.get("/", (_request, response) => {
      response.sendFile(path.join(process.cwd(), "index.html"))
    });

    this.connection.get("/health", (_request, response) => {
      response.status(200).json({
        success: true,
        status: "ok",
        message: "node + Express server is healthy"
      });
    });
  }

  public listenConnection() {
    this.connection.listen(PORT, () => {
      console.log(`Node + Express connection listening on http://localhost:${PORT} at PORT: ${PORT}`);
    })
  }

  getConnection() {
    return this.connection
  }
}

const expressConnection = new ExpressConnection();
export default expressConnection;
