import app from "./app";
import http from 'http';

const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log("Running on", PORT);
});