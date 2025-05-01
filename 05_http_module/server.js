const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Hello from node js");
});

server.listen(3000, () => {
  console.log("server is now listening to port 3000");
});
