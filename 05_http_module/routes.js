const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url == "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("HomePage");
  }
  if (url == "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1> This is a h1 heading </h1>");
  }
});

server.listen(3000, () => {
  console.log("server is now listening to port 3000");
});


// npm install -g nodemon -- for auto restart
// nodemon routes.js -- to run the server with nodemon
// or node --watch routes.js -- to run the server with auto restart (works in node 18+)