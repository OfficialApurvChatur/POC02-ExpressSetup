import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";


// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const environment = mode || "development";
  const machine = process.env.VITE_MACHINE || "local";
  
  const envPath = machine === "local" ? "./env" : ".";
  const envVar = loadEnv(environment, envPath, "");
  
  console.log(`Environment connection created successfully at path: ${envPath}/${environment}`);
  
  const port = Number(envVar.VITE_PORT) || 3000;

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    envDir: envPath,
    server: {
      port: port,
    }
  }
})
