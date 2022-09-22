import http from 'http';
import app from './App';

const server = http.createServer(app);

const PORT = process.env.PORT || 3001;

server.listen(PORT, ()=> {
  console.log(`🚀Server ready at http://localhost:${PORT}🚀`);
});