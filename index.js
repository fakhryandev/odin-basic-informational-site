const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 8080;

const server = http.createServer((req, res) => {
  res.writeHeader(200, { "Content-Type": "text/html" });

  let path = "./pages";

  const url = req.url;
  switch (url) {
    case "/":
      path = `${path}/index.html`;
      res.statusCode = 200;
      break;
    case "/about":
      path = `${path}/about.html`;
      res.statusCode = 200;
      break;
    case "/contact":
      path = `${path}/contact-me.html`;
      res.statusCode = 200;
      break;
    default:
      path = `${path}/404.html`;
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.error(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
