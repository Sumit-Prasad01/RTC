import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/events") {
    res.writeHead(200, {
      "Content-type": "text/event-stream",
      "Cache-control": "no-cache",
      Connection: "keep-alive",
    });

    const interval = setInterval(() => {
      res.write(`data : ${Date.now()} \n\n`);
    }, 3000);

    req.on("close", () => {
      clearInterval(interval);
      res.end();
    });
  } else {
    res.writeHead(200);
    res.end("Server is up");
  }
});

server.listen(8000, () => {
  console.log("Server is listening on Port `${http://localhost/8000}`");
});
