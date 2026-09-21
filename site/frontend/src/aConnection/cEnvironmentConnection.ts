class EnvironmentConnection {
  private ENV = "default";
  private MACHINE = "default";
  private PORT = 5173;
  private APP_NAME = "POC02-ExpressSetup";

  constructor() {
    this.setEnv();
  }
  
  private setEnv() {
    this.ENV = import.meta.env.VITE_ENV;
    this.MACHINE = import.meta.env.VITE_MACHINE;
    this.PORT = import.meta.env.VITE_PORT;
    this.APP_NAME = import.meta.env.VITE_APP_NAME;  
  }

  public getEnv() {
    return {
      ENV: this.ENV,
      MACHINE: this.MACHINE,
      PORT: this.PORT,
      APP_NAME: this.APP_NAME,  
    }
  }
}

const environmentConnection = new EnvironmentConnection();
export const getEnv = environmentConnection.getEnv();
