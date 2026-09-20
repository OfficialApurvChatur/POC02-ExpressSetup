import { createRoot } from "react-dom/client";
import ReactConnection from "./aConnection/aReactConnection";
import "./aConnection/bShadcnConnection/index.css";


createRoot(document.getElementById("root")!).render(
  <ReactConnection />
)
