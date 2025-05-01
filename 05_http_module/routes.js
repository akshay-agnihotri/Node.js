const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url == "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("HomePage");
  }
  if (url == "/about") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("aboutPage");
  }
});

server.listen(3000, () => {
  console.log("server is now listening to port 3000");
});
