import { users } from "../mocks/users.js";

// Create



// Read
export const listUsers = (request, response) =>{
  const { order } = request.query;
  const sortedUsers = users.sort((a, b) =>{
    if (order === 'desc') {
      return a.id < b.id ? 1 : -1;
    }
    return a.id > b.id ? 1 : -1;
  })
  response.writeHead(200, {'Content-type' : 'application/json'})
  response.end(JSON.stringify(users));
}

export const getUserById = (request, response) =>{
  const { id } = request.params;
  const user = users.find(user => user.id === id);

  if (user) {
    response.writeHead(200, {'content-type' : 'application/json'});
    response.end(JSON.stringify(user))
  } else {
    response.writeHead(404, {'content-type' : 'text/html'});
    response.end('<h2>User not found</h2>')
  }
}

// Update


// Delete