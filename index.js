const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.readFile("./index.html", (err, data) => {
      res.writeHeader(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url == "/about") {
    fs.readFile("./about.html", (err, data) => {
      res.writeHeader(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url == "/contact-me") {
    fs.readFile("./contact-me.html", (err, data) => {
      res.writeHeader(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
