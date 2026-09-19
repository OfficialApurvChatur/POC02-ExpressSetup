import http from "http";
import fs from "fs/promises";
import path from "path";


const PORT = process.env.PORT || 8000;

const init = () => {
  // Create node connection
  const nodeConnection = http.createServer( async (request, response) => {

    const url = request.url;

    switch (url) {
      // home page
      case "/": 
        // Read index.html file
        const indexHTML = await fs.readFile(
          path.join(process.cwd(), "index.html"),
          "utf-8"
        )

        // Response - write head
        response.writeHead(200, {
          "content-type": "text/html",
        })

        // Response - end
        response.end(indexHTML);
        break 

      // backend.png page
      case "/backend.png":
        // Read backend.png file 
        const backendPNG = await fs.readFile(
          path.join(process.cwd(), "public", "backend.png"),
        )
        // Response - write head
        response.writeHead(200, {
          "content-type": "image/png",
        })

        // Response - end
        response.end(backendPNG);
        break

      // 404 page
      default: 
        // Response - write head
        response.writeHead(404, {
          "content-type": "text/plain",
        })

        // Response - end
        response.end("Internal Pointer Variable...");
        break 
    }

  })

  // Listen node connection
  nodeConnection.listen(PORT, () => {
    console.log(`Node connection listening on http://localhost:${PORT} at PORT: ${PORT}`)
  })
}

init();
