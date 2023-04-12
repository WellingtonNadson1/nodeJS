import http from "node:http";
import { users } from "./mocks/users.js";

const PORT = 3000;
const hostname = 'localhost'

const server = http.createServer((request, response) =>{
  if (request.method === 'GET' && request.url === '/users') {
    response.writeHead(200, {'content-type' : 'application/json'});
    response.end(JSON.stringify(users))
  } else {
    response.writeHead(400, {'content-type' : 'text/html'});
    response.end(`Cannot ${request.method} ${request.url}`)
  }
})

server.listen(PORT, hostname, () => console.log('Server running'))