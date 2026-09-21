import { spawn } from "node:child_process";


const mode = process.argv[2] || "development";
const machine = process.argv[3] || "local";

const vite = spawn(
  "npm",
  [ "exec", "vite", "--", "--mode", mode ], {
    stdio: "inherit",
    shell: true,
    env: {
      ...process.env,
      VITE_MACHINE: machine
    }
  }
);

vite.on("error", (error) => {
  console.error("Failed to start Vite:", error.message);
});

vite.on("close", (code) => {
  console.log(`Vite stopped with code: ${code}`);
});
