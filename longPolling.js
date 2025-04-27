import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/poll") {
    setTimeout(() => {
      res.writeHead(200, {
        "Content-type": "application/json",
      });
      res.end(
        JSON.stringify({
          message: `Hello at ${new Date().toISOString()}`,
        })
      );
    }, 3000);
  } else {
    res.writeHead(200);
    res.end("Server is up and running.");
  }
});

server.listen(8000, () => {
  console.log("Server is listening on Port `${http://localhost/8000}`");
});
