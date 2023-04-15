import http from "node:http";
import { URL } from "node:url";
import { routes } from "./routes/routes.js";

const PORT = 3000;
const hostname = 'localhost'

const server = http.createServer((request, response) =>{
  const parsedURL = new URL(`http://${hostname}:${PORT}${request.url}`)

  let { pathname } = parsedURL;
  let id = null;

  const splitEndPoint = pathname.split('/').filter(Boolean);

  if (splitEndPoint.length > 1) {
    pathname = `/${splitEndPoint[0]}/:id`
    id = splitEndPoint[1]
  }
  
  const route = routes.find(routeObj => (
    routeObj.endpoint === pathname && routeObj.method === request.method
  ))
  if (route) {
    request.query = Object.fromEntries(parsedURL.searchParams);
    request.params = { id };
    route.handler(request, response);
  } else {
    response.writeHead(404, {'content-type' : 'text/html'});
    response.end(`Cannot ${request.method} ${request.url}`)
  }
})

server.listen(PORT, hostname, () => console.log(`🚀 Server running at http://${hostname}:${PORT}`))